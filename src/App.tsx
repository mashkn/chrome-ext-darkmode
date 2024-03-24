import React, {useEffect, useState} from 'react';
import "./App.scss"
import Main from "./pages/Main";
import SiteList from "./pages/SiteList";
import { RouterProvider as Router, createMemoryRouter } from 'react-router-dom';


// const App: React.FC = () => {
//   return (
//     <Main/>
//   );
// };
// export default App;
const pages = createMemoryRouter([
  {
    path: '/home',
    element: <Main />,
  },
  {
    path: '/site-list',
    element: <SiteList/>,
  }
],{initialEntries: ["/home", "/site-list"],
initialIndex: 0,});

// const App: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState<string>('home'); // Initial page
//   console.log(currentPage);
  // useEffect(() => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs:any) => {
  //     if (tabs[0].url?.includes('site-list')) {
  //       setCurrentPage('site-list');
  //     } else {
  //       setCurrentPage('home');
  //     }
  //   });
  // }, []);

//   const renderContent = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Main />;
//       case 'site-list':
//         return <SiteList 
//         // data={fetchDataForSavedWebsites()} 
//         />;
//       default:
//         return <div>Invalid Page</div>;
//     }
//   };

//   return renderContent();

// };
// export default App;


const App: React.FC = () => {
  return (
    <React.StrictMode>
        <Router router={pages}/>
    </React.StrictMode>
  );
};

export default App;