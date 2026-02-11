import { AlertCircle, HelpCircleIcon } from "lucide-react";

function Notification() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="flex justify-evenly items-center pt-7">
        <h2 className="text-2xl font-bold text-blue-950">Notifications</h2>
        <div className="flex gap-8 items-center">
          <button className="bg-green-600 rounded py-1 px-2.5 text-white font-medium cursor-pointer transition hover:bg-green-500">
            Mark all as read
            </button>
          <button className="text-white bg-orange-600 py-1 px-2.5 rounded font-medium cursor-pointer transition hover:bg-orange-500">Clear All</button>
        </div>
      </div>
      <div className="text-gray-500 text-lg flex flex-col items-center mt-10">
        < AlertCircle/>
        <p>No Notification Found</p>
      </div>
    </div>
  )
}

export default Notification;