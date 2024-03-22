import { FC } from 'react';

interface HeaderProps {
  page: "home" | "sitelist"; // limit page to either "home" or "sitelist"
}

const Header: FC<HeaderProps> = ({ page }: HeaderProps) => {
  
  let headerContent; 
  
  if(page === 'home'){
    headerContent = (
    <div className="Header">
    <p>Dimmed</p>
    </div>)
  } else if (page === 'sitelist'){
    headerContent = (
      <div >
      <p>Triangle</p>
      </div>)
  } else headerContent = null;
  
  return headerContent;
}

export default Header;