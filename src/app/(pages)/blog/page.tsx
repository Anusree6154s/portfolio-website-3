"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as cheerio from "cheerio";
import "@/styles/global.scss";
// import "https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap";

export default function Blog() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function scrapeBlog() {
      const { data } = await axios.get(
        "https://anusree6154s.github.io/documentation/all-posts"
      );
      console.log(data);

      const $ = cheerio.load(data);

      $(".list a").each((_, el) => {
        const href = $(el).attr("href");
        if (href && href.startsWith("./")) {
          $(el).attr("href", href.replace("./", "/blog/")); // ✅ Replace "./xyz" with "/xyz"
        }
      });

      const newData = $(".list").html();
      setData(newData || "");

      //   const lists: string[] = [];
      //   $("a").each((_, el) => {
      //     lists.push($(el).text().trim());
      //   });

      //   console.log("Blog Post Links:", lists);

      //   const links: string[] = [];
      //   $("a").each((_, el) => {
      //     const href = $(el).attr("href");
      //     console.log(href);
      //     // links.push($(href).text());
      //   });

      //   console.log("Blog Post Links:", links);
      //   console.log("Blog Post lists:", lists);
    }

    scrapeBlog();
  });
  return (
    <div className="blog-page">
      <div className="heading">Posts</div>
      <div className="list" dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}
