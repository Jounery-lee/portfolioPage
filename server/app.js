const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const db = [
  {
    id: "1",
    title: "랜덤음악제공 Misic",
    url: "https://jounery-lee.github.io/ME-SIC/",
    desc: "음악의 풀을 넓히는 작업 필요 데이터 크롤링? 그런걸로 좀 데이터를 구축하는 방식으로 연구해보자.",
  },
  {
    id: "2",
    title: "이주연 프로필.",
    url: "https://jounery-lee.github.io/Profile/",
    desc: "프로필은 더 할게 있나? 점검 후 도장 찍을 준비",
  },
  {
    id: "3",
    title: "기존 서비스 웹 디자인 클론 프로젝트입니다.",
    url: "https://jounery-lee.github.io/CloneCoding_voyagerx/",
    desc: "CSS적으로 완벽하지 못하니 CSS를 제대로 배워보고 고쳐놓자",
  },
  {
    id: "4",
    title: "지뢰찾기",
    url: "https://jounery-lee.github.io/Findingmines/",
    desc: "react페이지의 게임만들기를 참고하고 각종 상황판들을 만들어 보자",
  },
  {
    id: "5",
    title: "To Do list",
    url: "https://jounery-lee.github.io/myTodoList/?",
    desc: "더 할게 없음. 도장찍을 준비.",
  },
  { id: "6", title: "5 topic", url: "im the 5", desc: "아직 비었습니다." },
];

app.use(cors());
app.use(express.static("build"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
app.get("/topics", (req, res) => {
  res.send(db);
});
app.listen(port, () => {
  console.log(`server is on ${port}`);
});

//1. 로그인기능 ( 나와 손님으로 구분 나는 글쓰기 손님은 댓글 달기 가능)
//2. 1에서 적었듯 글쓰기 기능과 댓글 달기 기능. 글쓰기 기능은 6가지 프로젝트 업로드 기능으로 만들기.
