import { ArrowBigRightDash, Clock, CalendarDays } from "lucide-react";
import image from "./assets/courseimg.png"

function Dashboard() {
  return (
    <div className="w-full h-screen bg-white flex flex-col">
      <div className="flex justify-evenly items-center">
        <div className=" w-[55%] flex flex-col gap-2">
          <h1 className="text-xl font-medium">Full Stack Web Development Program</h1>
          <p className="text-violet-500 font-medium flex gap-2"> <Clock /> Duration : 6 months
            <span className="ml-35 text-gray-800 flex gap-2"><CalendarDays color="orange" /> Tentative End Date : <b>07 Feb 2026</b></span></p>
          <p className="text-green-800 text-lg mb-1">Course Progress</p>
          <input type="range" min="0" max="100"/>
        </div>
        <div>
          <img className="w-120" src={image} alt="" />
        </div>
      </div>
      <div className="w-full h-[55%] bg-white rounded-2xl p-2 border border-gray-200 ">
        <h2 className="text-violet-500 font-medium m-3">Today's Sessions</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-violet-950 w-full text-white font-medium">
              <th className="py-2.5 ">Batch</th>
              <th className="pr-15">Course Name</th>
              <th>Time</th>
              <th>Class</th>
              <th className="pr-18">Recording</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="text-center w-full h-full">
              <td className="py-2.5">
                <h2 className="text-xl font-medium text-gray-600">12:30pm/FS/6-Oct</h2>
                <p className="text-green-700 mt-2.5">Batch Progress</p>
                <input type="range"/>
                <p className="text-green-700"><b>42</b> %</p>
              </td>
              <td>
                <h2 className="text-xl font-medium text-gray-600">Full Stack Web <br />Development</h2>
                <p className="text-xs font-medium mt-1.5">By-Nitin Bela</p>
                </td>
                <td className="font-medium text-gray-600">12:30 - <br /> 14:00
                </td>
                <td className="flex justify-center items-center py-11">
                  <button className="border-2 border-green-800  bg-green-100  rounded hover:bg-white transition ease-in px-2 py-1 flex items-center gap-1">
                    Join Now  <ArrowBigRightDash size={18} color="black" strokeWidth={2} /> </button>
                </td>

                <td className="pb-1.5">
                  <button className="border border-orange-400 rounded text-gray-500 py-1 px-5  hover:text-black transition ease-in">
                    View Recordings
                  </button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard;