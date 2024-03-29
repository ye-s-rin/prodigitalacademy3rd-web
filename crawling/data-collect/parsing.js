import * as cheerio from "cheerio";

const data = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root">
      <div class="content">
        <ul class="profile">
          <li class="other">윤수</li>
          <li class="me">
            <a href="/profile/me">민수</a>
          </li>
          <li class="other">수지</li>
        </ul>
      </div>
    </div>
  </body>
</html>
`;

const $ = cheerio.load(data);
// console.log($.html());
// console.log($("a")); // tag
// console.log($("#root")); // id
// console.log($(".other")); // class
// console.log($("#root li.me"));
// console.log($("ul.profile").children());
// console.log($("a").prop("href"));
// console.log($("a").text());
const names = $("li")
  .map((i, el) => $(el).text().trim())
  .get();
console.log(names);
