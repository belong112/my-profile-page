// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type project = {
  pid: number;
  projectName: string;
  projectDescription: string;
  projectLink: string;
};

type Data = {
  projectList: Array<project>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    projectList: [
      {
        pid: 1,
        projectName: "多元議題心理測驗教具",
        projectDescription:
          "在教育現場，每學期總是會有很多不同種類的宣導，像是反霸凌、性平、交通安全...但通常都是看看影片，喊喊口號，說教意味濃厚。 因此，我們團隊用心理測驗將宣導做包裝，增進課程趣味。實際搭配課程實施後獲得 80% 學生的好評。",
        projectLink: "https://love-guide-50201sdhh-belong112.vercel.app/",
      },
      {
        pid: 2,
        projectName: "職涯小站自動化程式",
        projectDescription:
          "以前職缺是由志工定期手動整理，但相當沒有效率，且更新頻率不高。於是撰寫此工具能自動爬蟲獲得各公司現有職缺，並透過 chatGPT 統整，並利用 pygsheets 將資訊更新至 google sheet 上面。",
        projectLink: "https://github.com/belong112/auto-update-jobsheet",
      },
      {
        pid: 3,
        projectName: "均一教育平台徽章頁面重構",
        projectDescription:
          "均一平台有大量的教學影片資料，也常常讓使用者找得頭昏眼花。因此架設側邊目錄，成功讓使用者更快速找到自己想要學習的小單元，提升網站的使用體驗。",
        projectLink:
          "https://www.junyiacademy.org/course-compare/math-elem/math-5",
      },
      {
        pid: 4,
        projectName: "均一教育平台側邊目錄",
        projectDescription:
          "均一平台程式碼是由 khan academy 在 2012 年所複製出來的，程式碼老舊不易維護。因此決定使用 React.js 重新撰寫徽章頁面，讓未來管理者能較容易迭代更新。",
        projectLink: "",
      },
    ],
  });
}
