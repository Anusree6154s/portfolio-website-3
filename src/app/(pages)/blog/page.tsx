"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as cheerio from "cheerio";
import "@/styles/global.scss";

export default function Blog() {
  const [data, setData] = useState("");

  useEffect(() => {
    async function scrapeBlog() {
      const { data } = await axios.get(
        "https://anusree6154s.github.io/documentation/all-posts"
      );

      const $ = cheerio.load(data);

      $(".list a").each((_, el) => {
        const href = $(el).attr("href");
        if (href && href.startsWith("./")) {
          $(el).attr("href", href.replace("./", "/blog/")); // ✅ Replace "./xyz" with "/xyz"
        }
      });

      const newData = $(".list").html();
      setData(newData || "");

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
