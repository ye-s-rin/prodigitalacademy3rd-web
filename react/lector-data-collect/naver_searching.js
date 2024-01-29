import axios from "axios";
import * as cheerio from "cheerio";

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
  console.log(result);
}
fetchNaverSearch(params);
