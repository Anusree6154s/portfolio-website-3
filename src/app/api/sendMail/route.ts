// import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// Load environment variables (use .env.local for secrets)
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
  RECEIVERS_GMAIL,
} = process.env;

const createTransporter = async (): Promise<nodemailer.Transporter> => {
  try {
    const oauth2Client = new OAuth2Client(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: GOOGLE_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();

    const transportOptions: SMTPTransport.Options = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: RECEIVERS_GMAIL,
        clientId: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        refreshToken: GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token || undefined,
      },
    };

    const transporter = nodemailer.createTransport(transportOptions);
    await transporter.verify();
    return transporter;
  } catch (error) {
    console.error("Error creating transporter:", error);
    throw error;
  }
};

async function sendEmail(
  senders_gmail: string,
  senders_name: string,
  message: string
): Promise<void> {
  try {
    const transporter = await createTransporter();
    console.log(senders_gmail, senders_name, message);
    const mailOptions = {
      from: RECEIVERS_GMAIL,
      to: RECEIVERS_GMAIL,
      replyTo: senders_gmail,
      subject: `Mail from anusreeanilkumar.vercel.app(Portfolio) sent by ${senders_name} `,
      html: `<p><strong>Name:</strong> ${senders_name}<p/><p><strong>Email:</strong> ${senders_gmail}<p/><br/><div>${message}</div>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  console.log("request received yay!");
  // console.log("request received!", req.method);
  try {
    const body = await request.json();
    const { email, name, message } = body;

    await sendEmail(email, name, message);
    return Response.json({ data: "Mail Sent Successfully" });
  } catch (error: unknown) {
    console.error("Error in API:", error);

    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
