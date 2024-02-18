import axios from "axios";
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
    "limit": 50,
    "order": "support",
    "startNum": 0,
};

const fetchCampaignData = async (url) => {
    const html = await axios.post(url, payload)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    return html;
};

(async () => {
    const homeUrl = "https://service.wadiz.kr/";
    let url = homeUrl + "api/search/funding";
    const campaigns = [];

    const html = await fetchCampaignData(url);

    for (const el of html.data.list) {
        campaigns.push({
            campaignId: el.campaignId,
            categoryName: el.categoryName,
            title: el.title,
            totalBackedAmount: el.totalBackedAmount,
            photoUrl: el.photoUrl,
            nickname: el.nickName,
            coreMessage: el.coreMessage,
            whenOpen: el.whenOpen,
            achievementRate: el.achievementRate,
        })
    }

    console.log(campaigns);
    fs.writeFileSync("./campaign.json", JSON.stringify(campaigns));
})();