import axios from "axios";
import * as cheerio from "cheerio";

import fs from "fs";

async function fetchPageData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

let i = 1;
async function downloadImage(data) {
  try {
    const response = await axios.get(data.image, {
      responseType: "arraybuffer",
    });
    const buffer = Buffer.from(response.data, "binary");
    fs.writeFileSync(`./crawledImg/${i++}.jpg`, buffer);
    console.log("이미지 다운로드 완료");
  } catch (error) {
    console.error("이미지 다운로드 실패:", error.message);
  }
}

(async () => {
  const homeUrl =
    "https://search.naver.com/search.naver?where=news&sm=tab_jum&query=이차전지";
  let url = homeUrl;
  const data = [];

  let newsNum = 1;
  let pageNum = 0;
  while (pageNum < 2) {
    url = homeUrl + "&start=" + String(10 * pageNum + 1);
    pageNum++;
    console.log(pageNum);
    console.log(url);

    try {
      const html = await fetchPageData(url);
      const $ = cheerio.load(html);

      for (const el of $(".news_area")) {
        const title = $(el).find(".news_tit").prop("title");
        const image = $(el).find(".news_contents a img").prop("data-lazysrc");

        data.push({
          title: title,
          image: image,
          pageNum: pageNum,
          newsNum: newsNum++,
        });
      }
      console.log(data);
    } catch (error) {
      console.error("error:", error);
    }
  }

  for (const el of data) {
    await downloadImage(el);
  }
})();
