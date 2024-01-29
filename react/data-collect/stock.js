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

async function fetchIframeData(url) {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto(url);
  const iframeContent = await page.content();
  await browser.close();

  return iframeContent;
}

(async () => {
  const homeUrl = "https://finance.naver.com/";
  let url = homeUrl + "item/sise.nhn?code=005930";
  const data = [];

  try {
    const htmlhome = await fetchPageData(url);
    const $home = cheerio.load(htmlhome);

    for (const el of $home("iframe")) {
      const iframeTitle = $home(el).prop("title");

      if (iframeTitle === "일별 시세") {
        const iframeSrc = $home(el).prop("src");
        url = homeUrl + iframeSrc;

        // await fetchIframeData(url);
      }
    }
  } catch (err) {
    console.error(err);
  }

  url += "&page=1";
  let pageNum = 1;
  let isNext = true;
  while (pageNum < 11) {
    console.log(pageNum);
    url = url.slice(0, -1) + String(pageNum);
    console.log(url);

    try {
      const html = await fetchIframeData(url);
      const $ = cheerio.load(html);

      for (const el of $(`tr[onMouseOver="mouseOver(this)"]`)) {
        const date = $(el).find(".tah.p10.gray03").text().trim();
        const stockClose = $(el).find(".tah.p11").eq(0).text().trim();
        const d2d = $(el).find(".tah.p11").eq(1).text().trim();
        const stockOpen = $(el).find(".tah.p11").eq(2).text().trim();
        const high = $(el).find(".tah.p11").eq(3).text().trim();
        const low = $(el).find(".tah.p11").eq(4).text().trim();
        const volume = $(el).find(".tah.p11").eq(5).text().trim();
        console.log(date);

        //   const newsUrl = $(el).find(".news_contents .news_tit").prop("href");
        //   try {
        //     const response = await axios.get(newsUrl);
        //     const htmlNews = response.data;
        //     const $news = cheerio.load(htmlNews);
        //     newsDetail = $news.html();
        //   } catch (err) {
        //     console.error(err);
        //   }

        data.push({
          date: date,
          stockClose: stockClose, //종가
          d2d: d2d, //전일비
          stockOpen: stockOpen, //시가
          high: high, //고가
          low: low, //저가
          volume: volume, //거래량
          pageNum: pageNum,
        });
      }
      console.log(data);
      pageNum++;
    } catch (error) {
      console.error("error:", error);
    }
  }

  //   fs.writeFileSync("./stock.json", JSON.stringify(data));
})();
