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

// https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80
(async () => {
  const homeUrl =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=이차전지";
  let url = homeUrl;
  const data = [];

  let pageNum = 1;
  let isNext = true;
  while (isNext) {
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

        // let authorDetail = "";
        // try {
        //   const response = await axios.get(authorUrl);
        //   const htmlAuthor = response.data;
        //   const $author = cheerio.load(htmlAuthor);
        //   authorDetail = $author(".author-description").text().trim();
        // } catch (err) {
        //   console.error(err);
        // }

        data.push({
          title: title,
          newspaper: newspaper,
          summary: summary,
          image: image,
        });
      }
      console.log(data);

      //   console.log(pageNum);
      //   isNext = $(".pager li").hasClass("next");
      //   if (isNext) {
      //     url = homeUrl + $(".pager .next a").prop("href").trim("/");
      //     pageNum++;
      //   }

      //   console.log(isNext, url);
      isNext = false;
    } catch (error) {
      console.error("error:", error);
    }
  }

  //   fs.writeFileSync("./secondaryCell.json", JSON.stringify(data));
})();
