// import axios from "axios";
// import * as cheerio from "cheerio";

// const headers = {
//   "authority": "pedia.watcha.com",
//   "method": "GET",
//   "path": "/api/staffmades/278/contents?page=4&size=9",
//   "scheme": "https",
//   "Accept": "application/vnd.frograms+json;version=20",
//   "Accept-Encoding": "gzip, deflate, br",
//   "Accept-Language": "ko,en;q=0.9,en-US;q=0.8",
//   "Cookie": 
//     `_c_pdi=web-dYRhMH9lVFRyUNM3aXPE0vlowqonVp; _gid=GA1.2.1408200998.1706771779; __igaw__adid=NzAwPWQyMjg0YWEzMmU0NDFjZmY5ZmIyODVmYTAzYTVmMTUzOzcwMz1aZWZ0MEl4U1p4VzNneWJKVTY4Y1RFa1ZfUGN5dGRCWGQ5TzY1VjlldWVKU2ZZcnozVjQ3YWp6RkpCWExfVnQxADswMDA9NDRlMzNlOGItYTU0YS0xMWVlLTkzNzctMDI0MmFjMTEwMDAy; _pubcid=c846d495-db28-42cd-9da4-9a0e6f33c1a3; _fcOM={"k":"b019e8194c4e687b-4127835618cc87f904455c7","i":"1.231.165.73.5302242","date":1706772125151}; cto_bundle=MG_agF9tclZFUFNiT0lST1lXWWk0VlNTJTJCalUxTWFmTzIzNCUyRmpvZ1k3dzZoNmhYMFlzaENDTEhMb2JjTFU3cG9PM0pxcHRhJTJGUDVaTENNMTN4ZGFiSFh0JTJCSkh2WXp6M0taMCUyQkxmVzhvWTYxVGtrMyUyRjVNcWlYMFdORjVwRG9FM0NkUVVtYlBjRDlqVDA2dEM1Z0dveTR1YVNOa2clM0QlM0Q; _ga_S4YE5E5P6R=GS1.1.1706771778.1.1.1706773354.0.0.0; _ga=GA1.2.308733874.1706771779; _gat_gtag_UA_27006241_7=1; _gat_UA-27006241-7=1; _ga_1PYHGTCRYW=GS1.1.1706771778.1.1.1706773354.0.0.0`,
//   "If-None-Match": 'W/"4f47a97db3b9c578f66d89fa801b8d54"',
//   "Referer": "https://pedia.watcha.com/ko-KR/staffmades/278",
//   "Sec-Ch-Ua":
//     '"Not A(Brand";v="99", "Microsoft Edge";v="121", "Chromium";v="121"',
//   "Sec-Ch-Ua-Mobile": "?0",
//   "Sec-Ch-Ua-Platform": '"Windows"',
//   "Sec-Fetch-Dest": "empty",
//   "Sec-Fetch-Mode": "cors",
//   "Sec-Fetch-Site": "same-origin",
//   "User-Agent":
//     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
//   "X-Forwarded-For": "null",
//   "X-Frograms-App-Code": "Galaxy",
//   "X-Frograms-Client": "Galaxy-Web-App",
//   "X-Frograms-Client-Version": "2.1.0",
//   "X-Frograms-Device-Identifier": "web-dYRhMH9lVFRyUNM3aXPE0vlowqonVp",
//   "X-Frograms-Galaxy-Language": "ko",
//   "X-Frograms-Galaxy-Region": "KR",
//   "X-Frograms-Version": "2.1.0",
//   "X-Watcha-Client-Language": "ko",
//   "X-Watcha-Client-Region": "KR",
//   "X-Watcha-Remote-Addr": "1.231.165.73",
// };

// async function fetchPageData(url) {
//   try {
//     const response = await axios.get(url, { headers: headers });
//     return response.data.result;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

// (async () => {
//   const homeUrl = "https://pedia.watcha.com";
//   let url = `${homeUrl}/api/staffmades/278/contents?page=1&size=9`;
//   const movie = [];

//   let pageNum = 1;
//   while (pageNum < 7) {
//     try {
//       const html = await fetchPageData(url);
//       const json = html.result
  
//       for(const el of json){
//         movie.push({
//           title: el.title,
//           score: (el.ratings_avg * 0.5).toFixed(1),
//           directors: [el.director_names],
//         })
//       }

//       console.log(movie);
//       console.log(pageNum++, url);
//       url=homeUrl+html.next_uri;
//     } catch (error) {
//       console.error("error:", error);
//     }
//   }
// })();
