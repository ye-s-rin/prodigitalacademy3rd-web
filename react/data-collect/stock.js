import axios from "axios";
import * as cheerio from "cheerio";

import fs from "fs";
import iconv from "iconv-lite";
import puppeteer from "puppeteer";

async function fetchPageData(url) {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const decodedData = iconv.decode(response.data, "euc-kr");
    return decodedData.toString("utf-8");
  } catch (err) {
    console.error(err);
    throw err;
  }
}

(async () => {
  const homeUrl = "https://finance.naver.com/item/sise.nhn?code=005930";
  let url = homeUrl;
  const data = [];

  try {
    const htmlhome = await fetchPageData(url);
    const $home = cheerio.load(htmlhome);

    for (const el of $home("iframe")) {
      const iframeTitle = $home(el).prop("title");
      console.log("in for - iframeTitle:", iframeTitle);

      if (iframeTitle === "일별 시세") {
        console.log("in if");
        const iframeSrc = $home(el).prop("src");
        url += iframeSrc;
        console.log(url);

        const browser = await puppeteer.launch({
          headless: "new",
        });
        const page = await browser.newPage();
        await page.goto(`https://finance.naver.com${iframeSrc}`);
        const iframeContent = await page.content();

        console.log(iframeContent);
        await browser.close();
      }
    }
    console.log("out for");
  } catch (err) {
    console.error(err);
  }

  //   let pageNum = 1;
  //   let isNext = true;
  //   while (pageNum < 11) {
  //     try {
  //       const html = await fetchPageData(url);
  //       const $ = cheerio.load(html);

  //       for (const el of $(".tlline2 tbody")) {
  //         const date = $(el).find(".tah.p10.gray03").text();

  //         const newsUrl = $(el).find(".news_contents .news_tit").prop("href");
  //         try {
  //           const response = await axios.get(newsUrl);
  //           const htmlNews = response.data;
  //           const $news = cheerio.load(htmlNews);
  //           newsDetail = $news.html();
  //         } catch (err) {
  //           console.error(err);
  //         }

  //         data.push({
  //           date: date,
  //           stockClose: stockClose, //종가
  //           d2d: d2d, //전일비
  //           stockOpen: stockOpen, //시가
  //           high: high, //고가
  //           low: low, //저가
  //           volume: volume, //거래량
  //         });
  //       }
  //       console.log(data);

  //       console.log(pageNum);
  //       url = homeUrl + "&start=" + String(10 * pageNum + 1);
  //       pageNum++;
  //       console.log(url);
  //     } catch (error) {
  //       console.error("error:", error);
  //     }
  //   }

  //   fs.writeFileSync("./stock.json", JSON.stringify(data));
})();
