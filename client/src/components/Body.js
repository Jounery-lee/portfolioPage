import { useState } from "react";
import style from "../moduleCss/Body.module.css";

/*6칸짜리 그리드 컴포넌트입니다. API서버로 부터 데이터를 받아 와 각 칸에 내용을 표시합니다.
클릭하면 내용이 표시되고 화면 중간에 숨어있던 박스가 튀어나와 내용을 보여 줍니다.*/
function Topics({ id, onClick, title }) {
  return (
    <div id={id} onClick={onClick}>
      {title} + 사진
    </div>
  );
}

/* App.js로 넘어가는 Body Component */

function Body({ data, scrollTop }) {
  // 나중에 화면이동 시킬때 사용할 버튼 두개.
  function clickLeft() {
    console.log("leftClick");
  }
  function clickRight() {
    console.log("rightClick");
  }
  const [isClicked, setIsClicked] = useState("0%");
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [zindex, setZindex] = useState(-1);

  function onClick(event) {
    if (isClicked === "0%") {
      const id = event.target.id;
      setIsClicked("100%");
      setDesc(data[Number(id)].desc);
      setTitle(data[Number(id)].title);
      setZindex(1);
    } else {
      setIsClicked("0%");
      setZindex(-1);
    }
  }

  return (
    <div style={{ height: window.innerWidth > 375 ? 1500 : 800 }}>
      <div id={style.body}>
        <div className={style.bodyTitle}>
          <h1>음악과 프로그래밍, 이주연입니다.</h1>
        </div>
        <Topics title="Proj No.1" id="0" onClick={onClick} />
        <Topics title="Proj No.2" id="1" onClick={onClick} />
        <Topics title="Proj No.3" id="2" onClick={onClick} />
        <Topics title="Proj No.4" id="3" onClick={onClick} />
        <Topics title="Proj No.5" id="4" onClick={onClick} />
        <Topics title="Proj No.6" id="5" onClick={onClick} />
      </div>
      <div
        id={style.clickedBody}
        style={{
          opacity: isClicked,
          zIndex: zindex,
          top: window.innerWidth > 800 ? scrollTop - 800 : scrollTop - 550,
        }}
        onClick={onClick}
      >
        <h2><a href={desc}>{title}</a></h2>
      </div>
      <button id={style.leftBtn} onClick={clickLeft}>
        왼쪽
      </button>
      <button id={style.rightBtn} onClick={clickRight}>
        오른쪽
      </button>
    </div>
  );
}

export default Body;
