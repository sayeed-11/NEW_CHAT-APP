import React from 'react'


const chats = [
  {
    author: "another",
    message: "Hi",
    img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg",
    time: "10:20 PM",
  },
  {
    author: "you",
    message: "Hello",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    time: "10:20 PM",
  },
  {
    author: "another",
    message: "How are you?",
    img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg",
    time: "10:20 PM",
  },
  {
    author: "you",
    message: "I am fine",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    time: "10:20 PM",
  },
  {
    author: "another",
    message: "Where From you?",
    img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg",
    time: "10:20 PM",
  },
  {
    author: "you",
    message: "I am from New York",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    time: "10:20 PM",
  },
  {
    author: "you",
    message: "and you?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    time: "10:20 PM",
  },
  {
    author: "another",
    message: "I am from France.",
    img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg",
    time: "10:20 PM",
  },
  {
    author: "another",
    message: "Nice to meet you.",
    img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg",
    time: "10:20 PM",
  },
  {
    author: "you",
    message: "Me too",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    time: "10:20 PM",
  },
  {
    author: "you",
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ratione iusto nihil vitae quisquam, est sequi odio architecto quae culpa aperiam quam aliquam ullam eius quas repellendus? Vel, dignissimos ipsam.",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    time: "10:20 PM",
  },
  {
    author: "another",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi blanditiis velit quidem provident reiciendis sint deleniti voluptatibus eveniet pariatur.",
    img: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg",
    time: "10:20 PM",
  },
]


const Chat = ({ isProfile, setProfile, setView, isView }) => {
  return (
    <div className={`${isProfile ? "w-full md:w-[60%] lg:w-[40%] xl:w-[50%]" : "w-full md:w-[60%] lg:w-[75%]"} ${isView === "chat" ? "z-30" : "z-0"} transition-all duration-[0.3s] border-r-[0px] border-l-[0px] border-color-1/[0.5] font-poppins bg-slate-50 relative shadow-md`}>

      <ChatHead setProfile={setProfile} setView={setView} />
      <ChatContent />
      <ChatInput />
    </div>
  )
}

export default Chat


const ChatHead = ({ setProfile, setView }) => {
  return (
    <div className='bg-white shadow-sm'>
      <div className='p-3 flex justify-between items-center'>
        <div className='flex gap-x-3 items-center'>
          <button className='flex justify-center items-center pl-1 -mr-2' onClick={() => { setView("contact") }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0057ff"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
          </button>
          <div onClick={() => { setProfile(true) }} className='p-0.5 bg-bgColor-1 rounded-full shadow-md'>
            <img className='w-11 aspect-square rounded-full object-cover' src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
          </div>
          <button onClick={() => { setProfile(true) }} className='flex flex-col justify-center'>
            <h1 className='text-sm text-color-1'>Carolin Judas</h1>
            <p className='text-[0.7rem] text-color-1/[0.7]'>10:30 PM</p>
          </button>
        </div>


        <div className='flex items-center gap-x-5'>
          <div className='flex items-center gap-x-3'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0057ff"><path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" /></svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0057ff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
            </button>
          </div>
          <button className='bg-bgColor-1 p-2 rounded-md shadow-md'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20"><path fill='#FFF' d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" /></svg>
          </button>
        </div>
      </div>
    </div>

  )
}


const ChatInput = () => {
  return (
    <div className='bg-bgColor-1 absolute bottom-0 w-full flex justify-between px-1 py-1 items-center gap-x-2 rounded-md'>
      <div className='flex relative flex-1 items-center '>
        <input className='w-full border-none outline-none text-white px-10 bg-white/[0.15] shadow-md py-3 rounded-md placeholder:text-white/[0.5] text-xs' placeholder='Message' type="text" />
        <span className='absolute left-0  p-2 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFF"><path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg>
        </span>
        <span className='absolute right-0  p-2 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z" /></svg>
        </span>
      </div>
      <div>
        <button className='bg-white p-2 rounded-md shadow-md'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0057ff"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" /></svg>
        </button>
      </div>
    </div>
  )
}

const ChatContent = () => {
  return (
    <div style={{
      height: "calc(100vh - 165px)"
    }} className='w-full overflow-y-auto gap-y-5 flex flex-col px-3 py-2'>
      {
        chats.map((chat, index) => {
          return (
            <div className={`gap-2 flex max-w-[70%] ${chat.author === "you" ? "self-end flex-row-reverse" : ""}`}>
              <div>
                <img className='min-w-5 max-w-5 aspect-square object-cover rounded-full' src={chat.img} alt="" />
              </div>
              <div className={` py-1 px-2 rounded-ee-md rounded-es-md rounded-se-md relative ${chat.author === "you" ? "bg-bgColor-1 text-white rounded-ss-md rounded-se-none" : "bg-black/[0.05] rounded-es-md"}`}>
                <div className={`w-1.5 h-1.5 top-0 absolute ${chat.author === "you" ? "-right-1.5 bg-bgColor-1 message-arrow-right" : "-left-1.5 bg-black/[0.05] message-arrow-left"}`} />
                <p className='text-xs'>{chat.message}</p>
                <p className={`text-[0.45rem] opacity-[0.6] ${chat.author === "you" ? "text-left" : "text-right"}`}>{chat.time}</p>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}