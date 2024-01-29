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
  let url = homeUrl + "item/news.nhn?code=005930";
  const data = [];

  try {
    const htmlhome = await fetchPageData(url);
    const $home = cheerio.load(htmlhome);

    for (const el of $home("iframe")) {
      const iframeTitle = $home(el).prop("title");

      if (iframeTitle === "공시 리스트영역") {
        const iframeSrc = $home(el).prop("src");
        url = homeUrl + iframeSrc;
      }
    }
  } catch (err) {
    console.error(err);
  }

  url += "1";
  let pageNum = 1;
  let isNext = true;
  while (pageNum < 6) {
    console.log(pageNum);
    url = url.slice(0, -1) + String(pageNum);
    console.log(url);

    try {
      const html = await fetchIframeData(url);
      const $ = cheerio.load(html);

      for (const el of $("tr.first")) {
        const title = $(el).find(".tit").text().trim();
        const info = $(el).find(".info").text().trim();
        const date = $(el).find(".date").text().trim();

        data.push({
          title: title,
          info: info,
          date: date,
        });
      }
      console.log(data);
      pageNum++;
    } catch (error) {
      console.error("error:", error);
    }
  }

  fs.writeFileSync("./stockDisclosure.json", JSON.stringify(data));
})();
