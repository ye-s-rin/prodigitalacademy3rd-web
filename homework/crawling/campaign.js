import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

const headers = {
    "authority": "service.wadiz.kr",
    "method": "POST",
    "path": "/api/search/funding",
    "scheme": "https",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Content-Length": "72",
    "Content-Type": "application/json",
    "Origin": "https://www.wadiz.kr",
    "Referer": "https://www.wadiz.kr/",
    "Sec-Ch-Ua": `"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"`,
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": `"Windows"`,
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
};

const payload = {
    "categoryCode": "",
    "endYn": "",
    "limit": 48,
    "order": "support",
    "startNum": 0,
};

const fetchCampaignData = async (url) => {
    await axios.post(url, payload)
        .then((res) => res.data)
        .catch((err) => console.log(err));
};

(async () => {
    const homeUrl = "https://service.wadiz.kr/web/";
    let url = homeUrl + "wreward/main?order=support";
    const data = [];

    const html = await fetchCampaignData(url);
    // const list = html.data.list
    console.log(html);

    // for (const el of list) {
    //     data.push({
    //         title: el.title,
    //         photoUrl: el.photoUrl,
    //         corpName: el.corpName,
    //     })
    // }

    console.log(data);
    // fs.writeFileSync("./wadiz.json", JSON.stringify(data));
})();