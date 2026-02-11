function Chat() {
  return (
    <div className="bg-white w-full h-screen pl-2 pt-5">
      <div>
        <h1 className="text-3xl font-medium">Chat</h1>
        <p className="text-gray-500 text-lg">
          A dedicated screen to connect and communicate with batchmates or trainers for seamless collaboration and updates.
        </p>
      </div>

      <div className="flex flex-col gap-7 mt-7 ml-5 cursor-pointer">
        <div className="flex items-center gap-5">
          <span className="py-1.5 px-2 rounded bg-purple-900 text-white font-bold text-3xl">BS</span>
          <p className="text-blue-950 text-lg font-bold border-b border-transparent hover:border-black">All Students</p>
        </div>
        <div className="flex items-center gap-5">
          <span className="py-1.5 px-2 rounded bg-pink-900 text-white font-bold text-3xl">BS</span>
          <p className="text-blue-950 text-lg font-bold border-b border-transparent hover:border-black">12:30pm/FS/6-Oct</p>
        </div>
        <div className="flex items-center gap-5">
          <span className="py-1.5 px-2 rounded bg-green-800 text-white font-bold text-3xl">BS</span>
          <p className="text-blue-950 text-lg font-bold border-b border-transparent hover:border-black">4:30pm/FS/25-aug</p>
        </div>

      </div>
    </div>
  )
}

export default Chat;