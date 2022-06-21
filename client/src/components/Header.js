import styled from "../moduleCss/Header.module.css"

function Header(props){
    return <div style={{height: props.height}} className={styled.Header}>
            <a style={{top:props.top}} id={styled.home} className={styled.a} href="./">Home</a>
            <a style={{top:props.top}} id={styled.taglist} className={styled.a} href="./">Tag List</a>
            <a style={{top:props.top}} id={styled.search} className={styled.a} href="./">Search</a>
            <a style={{top:props.top}} id={styled.login} className={styled.a} href="./">login</a>
          </div>
  }

  export default Header;