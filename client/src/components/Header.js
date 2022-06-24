import styled from "../moduleCss/Header.module.css"

function Header(props){
    return <header style={{height: props.height}} className={styled.Header}>
          </header>
  }

  export default Header;