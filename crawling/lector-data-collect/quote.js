import axios from "axios";
import * as cheerio from "cheerio";

import fs from "fs";

const baseUrl = "https://quotes.toscrape.com/";
async function fetchQuote() {
  const resp = await axios.get(baseUrl);
  const $ = cheerio.load(resp.data);

  const quoteTags = $(".quote");
  const result = quoteTags
    .map((idx, el) => {
      const elem = $(el);

      const tags = elem.find(".tag");
      const tagsObj = tags
        .map((idx, el) => {
          const tagTag = $(el);
          return {
            tag: tagTag.text(),
            url: tagTag.prop("href"),
          };
        })
        .get();

      return {
        quote: elem.find(".text").text(),
        author: elem.find(".author").text(),
        authorUrl: elem.find("a").prop("href"),
        tags: tagsObj,
      };
    })
    .get();

  fs.writeFileSync("./quote.json", JSON.stringify(result));
}
// fetchQuote();

axios.get(baseUrl).then((resp) => {
  const $ = cheerio.load(resp.data);

  const quoteTags = $(".quote");
  const result = quoteTags
    .map(async (idx, el) => {
      const elem = $(el);

      const tags = elem.find(".tag");
      const tagsObj = tags
        .map((idx, el) => {
          const tagTag = $(el);
          return {
            tag: tagTag.text(),
            url: tagTag.prop("href"),
          };
        })
        .get();
      const authorUrl = elem.find("a").prop("href");
      const url = baseUrl + authorUrl;

      const authorResp = await axios.get(url);
      const $author = cheerio.load(authorResp.data);
      const authorDetail = $author(".author-details").text();

      return {
        quote: elem.find(".text").text(),
        author: elem.find(".author").text(),
        authorUrl: elem.find("a").prop("href"),
        tags: tagsObj,
        authorDetail: authorDetail,
      };
    })
    .get();

  Promise.all(result).then((data) => {
    console.log(data);
    fs.writeFileSync("./quote.json", JSON.stringify(data));
  });
});
