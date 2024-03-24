import React from 'react';
import Header from "../components/Header";
import "./SiteList.scss";
import { PiPencil } from "react-icons/pi";
import { PiMinusSquareBold } from "react-icons/pi";

const SiteList = () => {

  const sites = [
    'google.com', 
    'gmail.com', 
    'yahoo.com', 
    'github.com', 
    'whowhatwear.com', 
    'testtesttest.com', 
    'testing.com', 
    'whatwhat.com'];

  return (
    <div><Header page="sitelist"/>
    <div className="SiteList">
       {sites.map((el, index) => 
        (<div className="ListItem" key={index}>
        <p>{el}</p>
        <div className="icons">
            <button>
              <PiPencil/>
            </button>
            <button>
              <PiMinusSquareBold/>
            </button>
          </div>
        </div>)
       )
    }
    </div>
    </div>
  )
};

export default SiteList;