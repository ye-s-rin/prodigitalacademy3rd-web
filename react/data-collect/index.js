import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://quotes.toscrape.com/";

async function fetchPageData() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

(async () => {
  try {
    const html = await fetchPageData();
    const $ = cheerio.load(html);

    const data = [];

    for (const el of $(".quote")) {
      const quote = $(el).find(".text").text().trim();
      const author = $(el).find(".author").text().trim();
      const authorUrl = url + $(el).find("a").prop("href");
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
      });
    }

    console.log(data);
  } catch (error) {
    console.error("error:", error);
  }
})();
