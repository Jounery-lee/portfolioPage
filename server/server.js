const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

const db = [
  { id: "1", title: "지금 이 페이지 입니다.", desc: "리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트리액트액트리액트리액트리액트리액트리액트리액트리액트" },
  { id: "2", title: "음악장르별 추천 페이지 입니다.", desc: "리액트와 Express를 사용했습니다. 주소 http://localhost:1293" },
  { id: "3", title: "단위 변환기로부터 시작한 환율 계신가입니다.", desc: "순수한 JavaScript로만 구성했습니다." },
  { id: "4", title: "4 topic", desc: "im the 4" },
  { id: "5", title: "5 topic", desc: "im the 5" },
  { id: "6", title: "6 topic", desc: "im the 6" },
];

app.use(cors());
app.use(express.static('build'))
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
});
app.listen(port, () => {
  console.log(`on ${port}`);
});
