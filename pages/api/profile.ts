// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type SkillData = {
  title: string;
  skill: Array<string>;
};

type Data = {
  introduction: string;
  skills: Array<SkillData>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    introduction:
      "我叫邱昱禎，大學為電機資訊專業，縝密的邏輯思維和解決問題的能力是我的強項。半年的企業工作經驗讓我對網頁技術有更全面的了解。兩年的現場教學經驗讓我培養系統思考的能力，使我能看見問題的結構，分析自己的位置，並嘗試解決。期許自己持續精進各項能力，用自己的專業協助公司解決問題、一同成長。",
    skills: [
      {
        title: "Front End",
        skill: ["React.js", "Vue.js", "SCSS", "Tailwind / MUI"],
      },
      {
        title: "Back End",
        skill: ["Python", "Node.js", "RESTful api"],
      },
      {
        title: "Other",
        skill: ["Git", "React testing Library", "Vitest", "Jenkins"],
      },
    ],
  });
}
