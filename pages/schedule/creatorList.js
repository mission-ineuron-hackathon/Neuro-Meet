import React from "react";
import greentick from "./../../public/assets/greentick.svg";
import Image from "next/dist/client/image";
import profilePic from "./../../public/assets/profile.jpeg";
import ad from "./../../public/assets/arrowDown.svg";
const events = () => {





  
  return (
    <>
      <div className=" bg-slate-400  flex flex-col justify-around items-center">
        <div className="w-[100%]   flex flex-col items-center">
          <div className="flex justify-between w-[92%]">
            <input
              type="text"
              placeholder="Quick Search"
              className="w-[500px] h-[44px] border-white rounded-md border-solid border bg-[#16171B] 	"
            />
            <button className="w-[160px] h-[44px] bg-slate-400 @apply rounded-lg border-solid border text-white	">
              Newest <img src="" alt="" />{" "}
            </button>
          </div>
          <div className="w-[100%] bg-slate-400 mt-[25px] p-[30px]">
            <div className="flex flex-col items-center h-[60vh]">
              <div className="bg-[#FFFFFF] w-[98%] h-[50px] grid grid-cols-6  items-center  rounded-md text-[#16171B] mb-[20px]">
                <div className="text-center">
                  No <Image width={10} src={ad} />
                </div>
                <div className="text-center">
                  Name <Image width={10} src={ad} />
                </div>
                <div className="text-center">
                  Email Id <Image width={10} src={ad} />
                </div>
                <div className="text-center">
                  {" "}
                  Availability <Image width={10} src={ad} />
                </div>
                <div className="text-center">
                  Request <Image width={10} src={ad} />
                </div>
                <div className="text-center">
                  More <Image width={10} src={ad} />
                </div>
              </div>
              <div className="bg-[#c8c8c8] w-[98%] text-[#0b0a0a] flex flex-col h-[100%] overflow-auto">
                <div className=" grid grid-cols-6  items-center text-center  bg-slate-400">
                  <div>01</div>
                  <div className="flex justify-center gap-[20px] items-center">
                    <Image width={50} height={50} src={profilePic} />
                    Joker
                  </div>
                  <div>28 May 2021</div>
                  <div>MCR Delhi</div>
                  <div>
                    <Image width={50} height={50} src={greentick} />
                  </div>
                  <div>. . .</div>
                </div>
                <hr className="my-[10px]" />
                <div className=" grid grid-cols-6  items-center text-center  bg-slate-400">
                  <div>01</div>
                  <div className="flex justify-center gap-[20px] items-center">
                    <Image width={50} height={50} src={profilePic} />
                    Joker
                  </div>
                  <div>28 May 2021</div>
                  <div>MCR Delhi</div>
                  <div>
                    <Image width={50} height={50} src={greentick} />
                  </div>
                  <div>. . .</div>
                </div>
                <hr className="my-[10px]" />
                <div className=" grid grid-cols-6  items-center text-center  bg-slate-400">
                  <div>01</div>
                  <div className="flex justify-center gap-[20px] items-center">
                    <Image width={50} height={50} src={profilePic} />
                    Joker
                  </div>
                  <div>28 May 2021</div>
                  <div>MCR Delhi</div>
                  <div>
                    <Image width={50} height={50} src={greentick} />
                  </div>
                  <div>. . .</div>
                </div>
                <hr className="my-[10px]" />
                <div className=" grid grid-cols-6  items-center text-center  bg-slate-400">
                  <div>01</div>
                  <div className="flex justify-center gap-[20px] items-center">
                    <Image width={50} height={50} src={profilePic} />
                    Joker
                  </div>
                  <div>28 May 2021</div>
                  <div>MCR Delhi</div>
                  <div>
                    <Image width={50} height={50} src={greentick} />
                  </div>
                  <div>. . .</div>
                </div>
                <hr className="my-[10px]" />
                <div className=" grid grid-cols-6  items-center text-center  bg-slate-400">
                  <div>01</div>
                  <div className="flex justify-center gap-[20px] items-center">
                    <Image width={50} height={50} src={profilePic} />
                    Joker
                  </div>
                  <div>28 May 2021</div>
                  <div>MCR Delhi</div>
                  <div>
                    <Image width={50} height={50} src={greentick} />
                  </div>
                  <div>. . .</div>
                </div>
                <hr className="my-[10px]" />
                <div className=" grid grid-cols-6  items-center text-center  bg-slate-400">
                  <div>01</div>
                  <div className="flex justify-center gap-[20px] items-center">
                    <Image width={50} height={50} src={profilePic} />
                    Joker
                  </div>
                  <div>28 May 2021</div>
                  <div>MCR Delhi</div>
                  <div>
                    <Image width={50} height={50} src={greentick} />
                  </div>
                  <div>. . .</div>
                </div>
                <hr className="my-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default events;
