// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  description: string;
  image: string;
  imageText: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    title: "哈囉，歡迎來到我的小站",
    description:
      "這是邱昱禎的個人網站，內有自我介紹、我過去製作的專案、我的聯絡方式。歡迎隨意逛逛。",
    image: "https://source.unsplash.com/_LfLA5Nqfko",
    imageText: "main image description",
  });
}
