import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard";
import Chat from "./Chat";
import Notification from "./Notification";
import TestMod from "./TestMod";
import Resources from "./Resources";
function Content() {
  return (
    <div className="w-full bg-red-600 h-screen">
      <Routes>
        <Route path="/dashboard" Component={Dashboard}></Route>
        <Route path="/chat" Component={Chat}></Route>
        <Route path="/notification" Component={Notification}></Route>
        <Route path="/tests" Component={TestMod}></Route>
        <Route path="/resources" Component={Resources}></Route>
      </Routes>
    </div>
  )
}

export default Content;