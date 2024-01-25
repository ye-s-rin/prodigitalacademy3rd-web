import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://quotes.toscrape.com/";

async function fetchPageData() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // 호출자에서 오류를 처리하기 위해 다시 던집니다.
  }
}

(async () => {
  try {
    const html = await fetchPageData(); // 프로미스가 완료될 때까지 기다립니다.
    const $ = cheerio.load(html);

    const data = $(".quote .text")
      .map((idx, el) => {
        const quote = $(el).text().trim();
        const author = $(el).siblings(".author").text().trim();
        const authorUrl = $(el).siblings(".author").find("a").prop("href");

        return {
          quote: quote,
          author: author,
          authorUrl: authorUrl,
        };
      })
      .get();

    console.log(data);
  } catch (error) {
    console.error("error:", error);
  }
})();
