import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://quotes.toscrape.com/";

async function fetchPageData() {
  let array = [];

  try {
    const response = await axios.get(url);
    // console.log(response.data);
    array.push(response.data);
  } catch (err) {
    console.error(err);
  }
}
const html = fetchPageData();
const $ = cheerio.load(html);

const data = $(".quote .text")
  .map((idx, el) => {
    const quote = $(el).text().trim();
    const author = $(el).find(".author").text().trim();
    const authorUrl = $(el).find("a").prop("href");

    return `${quote} - ${author} - ${authorUrl}`;
  })
  .get();

console.log(data);
