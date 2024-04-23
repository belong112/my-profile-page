// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

require("dotenv").config();

type Data = {
  title: string;
  description: string;
  image: string;
  imageText: string;
};

async function fetchData() {
  const notion = new Client({ auth: process.env.REACT_APP_NOTION_TOKEN });
  const pages = await notion.databases.query({
    database_id: process.env.REACT_APP_NOTION_DATABASE_ID!,
  });
  if ("properties" in pages.results[0]) return pages.results[0].properties;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetchData();

  res.status(200).json({
    // TS 會有問題，先拔除
    // title: data.title.title[0].plain_text,
    // description: data.description.rich_text[0].plain_text,
    // image: data.image.url,
    // imageText: data.imageText.rich_text[0].plain_text,
    title: "哈囉，歡迎來到我的小站",
    description:
      "這是邱昱禎的個人網站，內有自我介紹、我過去製作的專案、我的聯絡方式。歡迎隨意逛逛。",
    image: "https://source.unsplash.com/_LfLA5Nqfko",
    imageText: "main image description",
  });
}
