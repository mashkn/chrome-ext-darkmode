import React from 'react';
import { FC } from 'react';
import { FaPlay } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  page: "home" | "sitelist"; // limit page to either "home" or "sitelist"
}

const Header: FC<HeaderProps> = ({ page }: HeaderProps) => {
  
  const navigate = useNavigate();

  let headerContent; 
  
  if(page === 'home'){
    headerContent = (
    <div className="Header">
    <p>Dimmed</p>
    </div>)
  } else if (page === 'sitelist'){
    headerContent = (
      <div className="Header">
      <button onClick={()=>navigate('/home')}><FaPlay className="FaPlay"/></button>
      </div>)
  } else headerContent = null;
  
  return headerContent;
}

export default Header;