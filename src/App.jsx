import React from "react";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
function App() {
  return (
    <div className="App min-h-screen w-full flex flex-col">
      <Header/>
      <ChatBox/>
    </div>
  );
}

export default App;
