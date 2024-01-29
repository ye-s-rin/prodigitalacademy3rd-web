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
})();
