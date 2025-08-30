"use client";
import React, { useState } from "react";
import styles from "@/styles/contact.module.scss";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        enqueueSnackbar(data.data, { variant: "success" });
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div id="contact" className={styles.contact}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
      <div className={styles["contact-inner"]}>
        <div className={styles.hardcoded}>
          <div className={styles.title}>
            <p>Looking to start a project? </p>
            <p>Feel free to contact me.</p>
          </div>
          <div className={styles.details}>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Surat,India"
              target="_blank"
            >
              <i className="bi bi-geo-alt"></i>

              <span>Surat, Gujarat, India</span>
            </Link>
            <Link href="mailto:anilkumaranusree113@gmail.com">
              <i className="bi bi-envelope"></i>

              <span>anilkumaranusree113@gmail.com</span>
            </Link>
            <Link href="tel:9699973230">
              <i className="bi bi-telephone"></i>
              <span>+91 9699973230</span>
            </Link>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleMail}>
          <div className={styles.top}>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="name"
              required={true}
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter Email"
              value={form.email}
              required={true}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <textarea
            placeholder="Enter Message"
            className={styles.message}
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            required={true}
          />
          <button  type="submit">
            {loading ? (
              <div className={styles["sending-loader"]}>
                <LoadingSpinner />
                <span>Sending</span>
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

const LoadingSpinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      style={{ width: "20px", height: "20px" }}
    >
      <radialGradient
        id="a12"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset={0} stopColor="white" />
        <stop offset=".3" stopColor="white" stopOpacity=".9" />
        <stop offset=".6" stopColor="white" stopOpacity=".6" />
        <stop offset=".8" stopColor="white" stopOpacity=".3" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <circle
        style={{ transformOrigin: "center" }}
        fill="none"
        stroke="url(#a12)"
        strokeWidth={15}
        strokeLinecap="round"
        strokeDasharray="200 1000"
        strokeDashoffset={0}
        cx={100}
        cy={100}
        r={70}
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur={2}
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        style={{ transformOrigin: "center" }}
        fill="none"
        opacity=".2"
        stroke="#FFFFFF"
        strokeWidth={15}
        strokeLinecap="round"
        cx={100}
        cy={100}
        r={70}
      />
    </svg>
  );
};
