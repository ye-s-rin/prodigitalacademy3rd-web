// wordcloud.js

// 워드 클라우드 데이터
let words = getWordsFromArticles();

// 워드 클라우드 생성 함수
function createWordCloud(words) {
  // 동적으로 상위 태그의 크기를 계산
  let width = Math.min(window.innerWidth, document.getElementById('wordCloud').offsetWidth);
  let height = Math.min(window.innerHeight, document.getElementById('wordCloud').offsetHeight);

  let layout = d3.layout.cloud()
    .size([width, height])
    .words(words)
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

  layout.start();

  function draw(words) {
    // SVG를 생성하고 가운데로 이동
    let svg = d3.select("#wordCloud").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
      .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")");

    // D3의 색상 체계
    let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // 워드 클라우드 텍스트 추가
    svg.selectAll("text")
      .data(words)
      .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return colorScale(i); })  // 색상 체계 적용
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
  }
}

// 워드 클라우드 데이터 추출 함수
function getWordsFromArticles() {
  let allTexts = articles.map(article => preprocessText(article.text));
  let allWords = allTexts.join(' ').split(/\s+/);

  let wordCounts = {};
  allWords.forEach(function(word) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  let words = Object.keys(wordCounts).map(function(word) {
    return { text: word, size: wordCounts[word] * 10 }; // 단어의 크기를 빈도에 따라 조절
  });

  return words;
}

// 텍스트 전처리 함수
function preprocessText(text) {
  // 정규식을 사용하여 특수문자, 숫자, 공백 등을 제거하고 한글만 남김
  return text.replace(/[^\uAC00-\uD7A3]+/g, ' ');
}

// 워드 클라우드 생성 함수 호출
createWordCloud(words);
