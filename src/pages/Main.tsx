import './Main.scss';
import React from 'react';
import Header from "../components/Header";
import { FaCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate();

  function testThis() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.id !== undefined) {
        console.log('Sending message --->')
        chrome.tabs.sendMessage(tab.id, {
          action: 'removeColorControl',
        });
      }
    });
  }

  return (
    <div>
      <Header page="home"/>
      <div className="Main">
      <button onClick={testThis}><h3 >Dim this page <FaCircle /></h3></button>
      <hr/>
      <button><p>Always dim this page</p></button>
      <button onClick={() => navigate('/site-list')}><h3>Saved pages list <FaPlay/></h3></button>
      <hr/>
      <div id="signature">
      <p >created by mashkn</p>
      <p><a href='https://github.com/mashkn' target="_blank" rel="noreferrer">github.com/mashkn</a></p>
      </div>
    </div>
    </div>
  )
};

export default Main;