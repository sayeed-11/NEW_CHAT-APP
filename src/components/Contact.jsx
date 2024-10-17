import React, { useState } from 'react'

const users = [
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    pending: 5,
    isActive: true,
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    isActive: true,
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    isActive: true,
  },

  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },
  {
    id: 1,
    name: "Carolin Judas",
    message: "How are you ?",
    img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
  },

]

const Contact = ({ isView, setView }) => {

  const [selectedChat, selectChat] = useState(0);
  return (
    <div style={{
      height: "calc(100vh - 47.5px)"
    }} className={`w-full ${isView === "contact" ? "z-30" : "z-0"} absolute md:static md:w-[40%] lg:w-[30%] xl:w-[25%] overflow-y-auto z-10 bg-white`}>



      <div className="serchBox sticky top-[0px] bg-white px-3 shadow-sm z-10">
        <input className='bg-transparent w-full pl-7 py-3 outline-none text-sm ' placeholder='Search' type="text" />
        <div className='absolute top-[50%] -translate-y-[110%]'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20" height="20"><path fill='rgba(0,0,0,0.5)' d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" /></svg>
        </div>
        <div className='flex justify-between'>
          <h1 className='font-poppins pb-1 text-color-1'>Chats</h1>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0057ff"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" /></svg>
          </button>
        </div>
      </div>


      <div className='space-y-2 py-2 px-3'>
        {
          users.map((user, index) => {
            return (
              <button onClick={() => {
                selectChat(index);
                setView("chat");
              }} style={{
                background: index === selectedChat ? "#0057ff" : "",
                color: index === selectedChat ? "#FFF" : "#000"
              }} className='flex justify-between items-center p-2 font-poppins rounded-md w-full'>
                <div className='flex items-center gap-x-2'>
                  <div className='w-12 relative'>
                    <img className='w-full aspect-square rounded-full object-cover' src={user.img} alt="" />
                    {user.isActive && <div className='absolute w-2.5 aspect-square rounded-full right-0 bottom-1 bg-green-500 before:absolute before:-inset-[2px] before:bg-green-500/[0.5] before:rounded-full before:animate-pulse' />}
                  </div>
                  <div className='space-y-1 *:text-left'>
                    <h1 className='text-sm'>{user.name}</h1>
                    <p className='text-[0.6rem]'>{user.message}</p>
                  </div>
                </div>
                <div className='flex items-center gap-x-1'>
                  <p className='text-[0.7rem]'>12:30 PM</p>
                  {
                    user.pending && <span className={`text-[0.7rem] ${selectedChat === index ? "bg-white text-color-1" : "bg-color-1 text-white"} aspect-square w-5 h-5 flex justify-center items-center rounded-full`}>{user.pending}</span>
                  }
                </div>
              </button>
            )
          })
        }
      </div>



    </div>
  )
}

export default Contact