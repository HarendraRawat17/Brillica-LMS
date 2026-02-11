import { useState } from "react";
import HTML from "./subcomponents/HTML";
import CSS from "./subcomponents/CSS";
import JavaSc from "./subcomponents/JavaSc";

function Resources() {

  const [tab, extention] = useState('HTML');

  const resourceTabs = [
    {
      label : 'HTML'
    },
    {
      label : 'CSS'
    },
    {
      label : 'JavaSc'
    },
  ];

  const setNavi = (e)=> {
    extention(e.target.innerText)
  }
  console.log(tab);


  return (
    <div className="w-full h-screen bg-green-700 pl-7 pt-2">
      <div className="flex gap-8 ">
      {
        resourceTabs.map((tab)=> {
          return(
            <div>
              <button onClick={setNavi}
               className="bg-white py-1 px-3 rounded font-medium">
                {tab.label}</button>
            </div>
          )
        })}
     </div>
     { tab == 'HTML' && <HTML/> }
     { tab == 'CSS' && <CSS/> }
     { tab == 'JavaSc' && <JavaSc/> }
  </div>
  )
}

export default Resources;