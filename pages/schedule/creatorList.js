import React, { useState, useEffect } from "react";
import Link from "next/link";
import greentick from "./../../public/assets/greentick.svg";
import Image from "next/dist/client/image";
import profilePic from "./../../public/assets/profile.jpeg";
import ad from "./../../public/assets/arrowDown.svg";
import {
  getDatabase,
  ref,
  onValue,
  child,
  get,
  set,
  push,
  update,
} from "firebase/database";
import { async } from "@firebase/util";

const Events = () => {
  const [allAdmins, setAllAdmins] = useState();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const getData = await get(child(ref(getDatabase()), `users/`));
        var admins = [];
        Object.keys(getData.val()).map((key) => {
          //console.log(getData.val()[key].username);

          getData.val()[key].isAdmin && admins.push(getData.val()[key])
             //console.log("Not Admin");
        });
        // //console.log(getData.val());
        var users = getData.val();
        //console.log(users);
        //console.log(admins);
        setAllAdmins(admins);
      } catch (error) {
        //console.log("====================================");
        //console.log("error:", error);
        //console.log("====================================");
      }
    };
    fetchAdmins();
    //console.log("admins: ", allAdmins);
  }, []);

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
              <div className="bg-[#c8c8c8] w-[98%] text-[#0b0a0a] flex flex-col h-[100%] overflow-auto text-sm p-1">
                {allAdmins &&
                  allAdmins.map((admin, index) => {
                    return (
                      <>
                        <div className=" grid grid-cols-6  items-center text-center  bg-slate-400">
                          <div>{index + 1}</div>
                          <div className="flex justify-center gap-[20px] items-center">
                            <Image
                              width={50}
                              height={50}
                              src={admin.profile_picture}
                            />
                            {admin.username}
                          </div>
                          <div>{admin.email}</div>
                          <div>Check Availability</div>
                          <div>
                            <Image width={50} height={50} src={greentick} />
                          </div>
                          <Link href={`/schedule/creator/admin-${admin.uid}`}>
                            <a>. . .</a>
                          </Link>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
