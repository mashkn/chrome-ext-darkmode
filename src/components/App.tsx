import React from 'react';


function App() {

  let active = false;
  function makeDark(color: string): void {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className='popupWindow'>
      <p>Here is the Chrome extension</p>
    </div>
  );

  // chrome.action.onClicked.addListener((tab) => {
  //   active = !active;
  //   const color = active ? "dimgrey" : "white";
  //   chrome.scripting
  //     .executeScript({
  //       target: { tabId: tab.id ? tab.id : -1 },
  //       func: makeDark,
  //       args: [color],
  //     })
  //     .then();
  // });
}

export default App;