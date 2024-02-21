import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

const headers = {
    "authority": "www.wadiz.kr",
    "method": "GET",
    // "path": "/web/reward/api/comments/campaigns/213787?page=0&size=10&commentGroupType=CAMPAIGN&rewardCommentType=",
    "scheme": "https",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cookie": "JSESSIONID=F70F15ACD003EB387BEE4127937AD9FE; ab.storage.deviceId.0c308381-846f-4726-ad61-23ea6add9f4e=%7B%22g%22%3A%2264cc17f3-4ae6-2de5-364d-6c30bfaedf86%22%2C%22c%22%3A1708255640664%2C%22l%22%3A1708255640664%7D; _gid=GA1.2.2083591270.1708255641; _gcl_au=1.1.478724472.1708255641; _waid=wa2.0.193030476; _wsid=170825564478000637159090; _fwb=166PdDaVcU4w9OCXUDav3pw.1708255644685; _tt_enable_cookie=1; _ttp=hp7tcigknML-6xZsLvNvOZG4PzB; ab.storage.sessionId.0c308381-846f-4726-ad61-23ea6add9f4e=%7B%22g%22%3A%22fca09f2b-691a-e799-41a9-3fa8dcf489e8%22%2C%22e%22%3A1708257924164%2C%22c%22%3A1708255640661%2C%22l%22%3A1708256124164%7D; _ga=GA1.2.1040640450.1708255641; cto_bundle=yftqSV94U3M3VDNGWGlZcEg4bWZsWVhWJTJGdzBEJTJGNHNVUFdGNDl1eDJ4MFZhTERpV3RXeFRKWHUlMkJWRTFTc1RVZjRhd3VJR0JUS3RVaVpKejQ3OExUVGI2dSUyQkZOajZPVjdYN244MSUyQlRsdkFIb1V0NWRoJTJGRHpHTEQlMkJhbEJCcW1tZUg1WiUyQlR1Y2U5N28zU05Kc0t6dWcyclRmMDlBJTNEJTNE; wcs_bt=s_577200a05f81:1708256520; _ga_J52ZXRWSBV=GS1.1.1708255641.1.1.1708256520.0.0.0",
    // "Referer": "https://www.wadiz.kr/web/campaign/detail/qa/213787/comment",
    "Sec-Ch-Ua": `"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"`,
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": `"Windows"`,
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"

};

const fetchCommentData = async (url) => {
    const html = await axios.get(url)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    return html;
};

(async () => {
    const homeUrl = "https://www.wadiz.kr/web/reward/api/comments/campaigns/";
    const queryString = "?page=0&size=40&commentGroupType=CAMPAIGN&rewardCommentType="
    let url = "";
    const campaigns = JSON.parse(fs.readFileSync('campaign.json'));
    const comments = [];

    for (const campaign of campaigns) {
        url = homeUrl + campaign.campaignId + queryString;
        const html = await fetchCommentData(url);

        console.log(url);

        for (const comment of html.data.content) {
            const recomments = [];

            for (const reply of comment.commentReplys) {
                recomments.push({
                    body: reply.body,
                    Campaign: reply.commonId,
                    commentType: reply.commentType,
                    userNickname: reply.nickName,
                    whenCreated: reply.whenCreated,
                    commentReplys: null,
                    depth: reply.depth
                });
            };

            comments.push({
                body: comment.body,
                Campaign: comment.commonId,
                commentType: comment.commentType,
                userNickname: comment.nickName,
                whenCreated: comment.whenCreated,
                commentReplys: recomments,
                depth: comment.depth
            });

        };
    }

    // console.log(comments);
    // for (const comment of comments) {
    //     console.log(comment.commentReplys);
    // }
    fs.writeFileSync("./comment.json", JSON.stringify(comments));
})();