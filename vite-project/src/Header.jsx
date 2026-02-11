import { BellRingIcon, MessageCircle, MessageSquare, Search } from "lucide-react";

function Header({navShow, setNavShow}) {
//  console.log("Header", navShow);

  return (
    <div className="h-18 w-full bg-indigo-50 flex justify-between items-center text-xl font-bold text-indigo-950 mt-2 pl-5 pr-5 rounded-xl">
      <div className="text-black">Hello Harendra !✋</div>
      <div className="flex items-center gap-3">
      <div className="flex items-center gap-4 py-1.5 px-4 border rounded bg-white" 
      > <Search color="gray" />
      <input className="bg-white w-65 font-normal text-lg" type="text" placeholder= "Search..."/></div>
      
      <div className="bg-white rounded w-10 h-10 flex justify-center items-center cursor-pointer"><MessageCircle color="green"/></div>
      <div className="bg-white rounded w-10 h-10 flex justify-center items-center cursor-pointer"> <BellRingIcon/></div>
      <div className="border-b border-transparent hover:border-black">
        <span className="text-white bg-amber-900 py-0.5 px-2 rounded mr-2">H</span> 
         Harendra Rawat</div>
      </div>
    </div>
  );
};

export default Header;