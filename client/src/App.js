import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [topMenuHeight, setTopMenuHeight] = useState(100);
  const [menuAtagTop, setMenyAtagTop] = useState(25);
  const [data, setData] = useState("");
  const [scrollTop, setScrollTop] = useState(0)

  function topMenuShow(event) {
    if (event.deltaY < 0) {
      setTopMenuHeight(80);
      setMenyAtagTop(25);
    } else {
      setTopMenuHeight(30);
      setMenyAtagTop(-50);
    }
  }
  window.addEventListener("load", onLoad);
  window.addEventListener('scroll',onScroll )
  
  function onScroll(){
    setScrollTop(current => document.documentElement.scrollTop)
  }

  async function onLoad(event) {
    const fetchedData = await fetch("https://portfolio-react-express-juyeon.herokuapp.com/topics");
    // const fetchedData = await fetch("http://localhost:5000/topics");
    const body = await fetchedData.json();
    setData(current => body)
  }
  
  return (
    <div className="App" onWheel={topMenuShow} >
      <Header height={topMenuHeight} top={menuAtagTop} />
      <Body data={data} scrollTop={scrollTop}/>
      <Footer />
    </div>
  );
}

export default App;
