import './Main.scss';
import Header from "../components/Header";
import { FaCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const Main = () => {
  return (
    <div>
      <Header page="home"/>
      <div className="Main">
    
      <h3>Dim this page <FaCircle /></h3>
      <hr/>
      <p>Always dim this page</p>
      <h3>Saved pages list <FaPlay/></h3>
      <hr/>
      <div id="signature">
      <p >created by mashkn</p>
      <p><a href='https://github.com/mashkn' target="_blank">github.com/mashkn</a></p>
      </div>
    </div>
    </div>
  )
}

export default Main;