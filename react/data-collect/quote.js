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
  const homeUrl = "https://quotes.toscrape.com/";
  let url = homeUrl;
  const data = [];

  let pageNum = 1;
  let isNext = true;
  while (isNext) {
    try {
      const html = await fetchPageData(url);
      const $ = cheerio.load(html);

      for (const el of $(".quote")) {
        const quote = $(el).find(".text").text().trim();
        const author = $(el).find(".author").text().trim();
        const authorUrl = homeUrl + $(el).find("a").prop("href");
        const tags = $(el)
          .find("a.tag")
          .map((idx, tagEl) => $(tagEl).text().trim())
          .get();

        let authorDetail = "";
        try {
          const response = await axios.get(authorUrl);
          const htmlAuthor = response.data;
          const $author = cheerio.load(htmlAuthor);
          authorDetail = $author(".author-description").text().trim();
        } catch (err) {
          console.error(err);
        }

        data.push({
          quote: quote,
          author: author,
          authorUrl: authorUrl,
          tags: tags,
          authorDetail: authorDetail,
          pageNum: pageNum,
        });
      }
      // console.log(data);

      console.log(pageNum);
      isNext = $(".pager li").hasClass("next");
      if (isNext) {
        url = homeUrl + $(".pager .next a").prop("href").trim("/");
        pageNum++;
      }

      console.log(isNext, url);
    } catch (error) {
      console.error("error:", error);
    }
  }

  fs.writeFileSync("./quote.json", JSON.stringify(data));
})();
