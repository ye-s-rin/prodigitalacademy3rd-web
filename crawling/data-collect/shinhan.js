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

(async () => {
  const homeUrl =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=신한투자증권";
  let url = homeUrl;
  const data = [];

  let pageNum = 1;
  let isNext = true;
  while (pageNum < 11) {
    try {
      const html = await fetchPageData(url);
      const $ = cheerio.load(html);

      for (const el of $(".news_area")) {
        const title = $(el).find(".news_tit").prop("title");
        const newspaper = $(el)
          .find(".news_info .info_group a ")
          .first()
          .text()
          .trim();
        const summary = $(el).find(".dsc_wrap a").text().trim();
        const image = $(el).find(".news_contents a img").prop("data-lazysrc");

        let newsDetail = "";
        const newsUrl = $(el).find(".news_contents .news_tit").prop("href");
        try {
          const response = await axios.get(newsUrl);
          const htmlNews = response.data;
          const $news = cheerio.load(htmlNews);
          newsDetail = $news.html();
        } catch (err) {
          console.error(err);
        }

        data.push({
          title: title,
          newspaper: newspaper,
          summary: summary,
          image: image,
          newsDetail: newsDetail,
          pageNum: pageNum,
        });
      }
      console.log(data);

      console.log(pageNum);
      url = homeUrl + "&start=" + String(10 * pageNum + 1);
      pageNum++;
      console.log(url);
    } catch (error) {
      console.error("error:", error);
    }
  }

  fs.writeFileSync("./shinhan.json", JSON.stringify(data));
})();
