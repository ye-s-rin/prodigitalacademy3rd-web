import axios from "axios";
import * as cheerio from "cheerio";

import fs from "fs";
import iconv from "iconv-lite";

const headers = {
  "authority": "service.wadiz.kr",
  "method": "POST",
  "path": "/api/search/funding",
  "scheme": "https",
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "ko,en;q=0.9,en-US;q=0.8",
  "Content-Length": "74",
  "Cache-Type": "application/json",
  "Origin": "https://www.wadiz.kr",
  "Referer": "https://www.wadiz.kr/",
  "Sec-Ch-Ua": `"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"`,
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": `"Windows"`,
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
};

const payload = {
  "categoryCode": "",
  "endYn": "",
  "limit": 48,
  "order": "recommend",
  "startNum": 0,
};

async function fetchPageData(url) {
  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

(async () => {
  const homeUrl = "https://service.wadiz.kr/";
  let url = homeUrl + "api/search/funding";
  const data = [];

  const html = await fetchPageData(url);
  const list = html.data.list

  for (const el of list) {
    data.push({
      title: el.title,
      photoUrl: el.photoUrl,
      corpName: el.corpName,
    })
  }

  console.log(data);
  fs.writeFileSync("./wadiz.json", JSON.stringify(data));
})();
