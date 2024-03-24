import './Main.scss';
import Header from "../components/Header";
import { FaCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import SiteList from './SiteList';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import {broswerHistory} from 'react-router-dom';

const Main = () => {
  // const [currentPage, setCurrentPage] = useState<string>('home');
  // const switchPage = () => browserHistory.push('site-list');
  const navigate = useNavigate();
  return (
    <div>
      <Header page="home"/>
      <div className="Main">
    
      <h3 >Dim this page <FaCircle /></h3>
      <hr/>
      <p>Always dim this page</p>
      <button onClick={() => navigate('/site-list')}><h3>Saved pages list <FaPlay/></h3></button>
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