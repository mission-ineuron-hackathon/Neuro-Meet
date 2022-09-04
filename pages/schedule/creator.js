import React from 'react'
import Image from "next/image";
import profileImg from "../../public/assets/profile.jpeg";


const creater = () => {
    return (
        <div className="h-[82vh] bg-[#cfb1de] rounded-xl mt-[20px] flex flex-col justify-around items-center">
          <div className="w-[90%] h-[35%] ">
            <p>User Details</p>
            <div className="w-[100%] h-[100%] bg-[#FFFFFF] py-[15px] flex justify-around">
              <div className="w-[20%] h-[100%]">
                
                <Image width={100} height={100} src={profileImg} />
              </div>
              <div className="w-[30%] h-[100%]">
                <div className="flex flex-col h-[100%] justify-between">
                  <div>
                    <p>Name</p>
                    <p className="text-[#8037A9]">Joseph Moreja</p>
                  </div>
                  <div>
                    <p>Email</p>
                    <p className="text-[#8037A9]">moreja@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-[100%]">
                <div>
                  <p>Description</p>
                  <p className="text-[#8037A9]">
                    blockchain developer{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            
          </div>
          
        </div>
      );
}

export default creater