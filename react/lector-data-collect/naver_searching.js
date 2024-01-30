import axios from "axios";
import * as cheerio from "cheerio";
import https from "https";
import crypto from "crypto";

const params = {
  where: "news",
  query: "이차전지",
};

async function fetchNaverSearch(params) {
  const baseUrl = "https://search.naver.com/search.naver";

  const resp = await axios.get(baseUrl, {
    params: params,
  });
  const $ = cheerio.load(resp.data);
  const result = $(".list_news .bx")
    .map((i, elem) => {
      const press = $(elem).find("a.info.press").text();
      const anchor = $(elem).find("a.news_tit");
      const title = anchor.text().trim();
      const url = anchor.prop("href");
      const dsc = $(elem).find(".news_dsc").text().trim();
      const imgTag = $(elem).find(".dsc_thumb img");
      // const imgUrl = imgTag.prop('src');
      const imgUrl = imgTag.prop("data-lazysrc");

      return {
        press: press,
        title: title,
        url: url,
        dsc: dsc,
        imgUrl: imgUrl,
      };
    })
    .get();

  for (let item of result) {
    try {
      const resp = await axios.get(item.url, {
        httpsAgent: new https.Agent({
          secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
        }),
      });
      item.html = resp.data;
    } catch (err) {
      // console.error(err);
    }
  }
  console.log(result);
}

fetchNaverSearch(params);

// https://search.naver.com:443/search.naver?where=news&sm=tab_jum&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80
// http://search.naver.com:80/search.naver?where=news&sm=tab_jum&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80
// http://search.naver.com:3000/search.naver?where=news&sm=tab_jum&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80
