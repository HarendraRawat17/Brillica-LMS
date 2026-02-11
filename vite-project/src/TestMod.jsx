 import { Eye  } from "lucide-react";
 function TestModules() {
  return (
    <div className="bg-white w-full h-screen p-4">
      <div>
        <h1 className="text-3xl font-medium text-indigo-950"
        >Test Modules</h1>
        <p className="text-lg text-gray-600 mb-2  mt-2.5">Manage your Tests and Responses.</p>
      </div>
      <div>
        <table className="w-full h-[90%] ">
          <thead className=" w-full bg-indigo-50 ">
            <tr>
            <th className="py-2.5">Test Name</th>
            <th>Trainer</th>
            <th>Total Questions</th>
            <th>Total Marks</th>
            <th>Assign Date</th>
            <th>Duraion</th>
            <th>Score</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full ">
            <tr className="w-full text-center text-blue-600 hover:bg-gray-50 transition">
              <td className="py-2.5 text-gray-950">
                javascript
              </td>
              <td>Nitin Bela</td>
              <td>28</td>
              <td>46</td>
              <td>12 Jan 2026</td>
              <td className="text-gray-500">120min</td>
              <td className="text-gray-500">38</td>
              <td className="flex justify-center mt-1.5">
                <button className="py-1 px-2.5 bg-blue-600 rounded text-white flex gap-2 items-center text-center cursor-pointer">
                  <Eye size={16} strokeWidth={2} /> View Result</button>
              </td>
            </tr>
            <tr className="text-center border-t text-blue-600 border-gray-300 hover:bg-gray-50 transition">
              <td className="py-3.5 text-gray-950">
                javascript
              </td>
              <td>Nitin Bela</td>
              <td>28</td>
              <td>46</td>
              <td>12 Jan 2026</td>
              <td className="text-gray-500">120min</td>
              <td className="text-gray-500">-</td>
              <td className="flex gap-2 justify-center mt-2">
                <button className="py-1 px-2.5 bg-white rounded text-gray-600 border border-gray-400 flex gap-2 items-center text-center cursor-pointer">
                 <Eye size={16} strokeWidth={2} color="gray" /> View Result</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
 }
 
 export default TestModules;