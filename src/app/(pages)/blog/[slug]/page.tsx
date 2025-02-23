"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as cheerio from "cheerio";

export default function BlogPost() {
  const { slug } = useParams();

  const [data, setData] = useState("");

  useEffect(() => {
    async function scrapeBlog() {
      const { data } = await axios.get(
        `https://anusree6154s.github.io/documentation/${slug}`
      );

      const $ = cheerio.load(data);

      $("main a").each((_, el) => {
        const href = $(el).attr("href");
        if (href && href.startsWith("./")) {
          $(el).attr("href", href.replace("./", "/blog/"));
        } else if (href && href.startsWith("/documentation/")) {
          $(el).attr("href", href.replace("/documentation/", "/blog/"));
        }
      });

      const newData = $("main").html();
      setData(newData || "");
    }

    scrapeBlog();
  });
  return (
    <div className="slug-post" dangerouslySetInnerHTML={{ __html: data }} />
  );
}
