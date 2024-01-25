import axios from "axios";
const url = "https://www.naver.com";

async function fetchPageData() {
  let array = [];

  try {
    const response = await axios.get(url);
    console.log(response.data);
    array.push(response.data);
  } catch (err) {
    console.error(err);
  }
}
fetchPageData();
