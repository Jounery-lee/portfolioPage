const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

const db = [
  { id: "1", title: '랜덤음악제공 Misic', desc: "https://jounery-lee.github.io/ME-SIC/"},
  { id: "2", title: "지금 이 페이지 입니다.", desc: "https://jounery-lee.github.io/Profile/" },
  { id: "3", title: "음악장르별 추천 페이지 입니다.", desc: "https://jounery-lee.github.io/CloneCoding_voyagerx/" },
  { id: "4", title: "단위 변환기로부터 시작한 환율 계신가입니다.", desc: "https://jounery-lee.github.io/Findingmines/" },
  { id: "5", title: "To Do list", desc: "https://jounery-lee.github.io/myTodoList/?" },
  { id: "6", title: "5 topic", desc: "im the 5" }
];

app.use(cors());
app.use(express.static('build'))
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
});
app.get("/topics", (req,res) => {
  res.send(db)
})
app.listen(port, () => {
  console.log(`server is on ${port}`);
});

//1. 로그인기능 ( 나와 손님으로 구분 나는 글쓰기 손님은 댓글 달기 가능)
//2. 1에서 적었듯 글쓰기 기능과 댓글 달기 기능. 글쓰기 기능은 6가지 프로젝트 업로드 기능으로 만들기.