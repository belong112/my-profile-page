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
  return pages.results[0].properties;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetchData();

  res.status(200).json({
    title: data.title.title[0].plain_text,
    description: data.description.rich_text[0].plain_text,
    image: data.image.url,
    imageText: data.imageText.rich_text[0].plain_text,
  });
}
