import axios from "axios";
import * as cheerio from "cheerio";

async function fetchNaverStock(code) {
  const baseUrl = "https://finance.naver.com/item/sise_day.naver";
  const params = {
    code: code,
  };

  const resp = await axios.get(baseUrl, {
    params: params,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
  const $ = cheerio.load(resp.data);
  const trTags = $("tr");
  const data = trTags
    .slice(1, trTags.length - 1)
    .map((i, el) => {
      const date = $(el).find("td:nth-child(1)")?.text()?.trim();
      const close = $(el).find("td:nth-child(2)")?.text()?.trim();
      const ratio = $(el).find("td:nth-child(3)")?.text()?.trim();
      const open = $(el).find("td:nth-child(4)")?.text()?.trim();
      const high = $(el).find("td:nth-child(5)")?.text()?.trim();
      const low = $(el).find("td:nth-child(6)")?.text()?.trim();
      const volume = $(el).find("td:nth-child(7)")?.text()?.trim();

      return {
        date,
        close,
        ratio,
        open,
        high,
        low,
        volume,
      };
    })
    .get();
  const result = data.filter((elem, idx) => {
    return elem.date;
  });
  console.log(result);
}

fetchNaverStock("005930");
