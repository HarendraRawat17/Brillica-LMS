import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import Chat from "./Chat";
import Notification from "./Notification";
import TestMod from "./TestMod";
import Resources from "./Resources";
import Batches from "./Batches";
function Content() {
  return (
    <div className="w-full bg-red-600 h-screen">

      <Routes>
        <Route path="/dashboard" Component={Dashboard}></Route>
        <Route path="/chat" Component={Chat}></Route>
        <Route path="/notification" Component={Notification}></Route>
        <Route path="/tests" Component={TestMod}></Route>
        <Route path="/resources" Component={Resources}></Route>
        <Route path="/batches" Component={Batches}></Route>
      </Routes>

       <div className="text-5xl h-screen text-white flex justify-center items-center transform-stroke">
         Brillica's LMS (Project)
      </div>
    </div>
  )
}

export default Content;