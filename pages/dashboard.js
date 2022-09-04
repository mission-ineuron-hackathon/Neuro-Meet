import React, { useState, useEffect } from "react";
// import logo from "./../public/assets/googleLogo.jpg"
import Image from "next/image";
import profileImg from "./../public/assets/profile.jpeg";
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
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";
import { async } from "@firebase/util";

const UserDetails = () => {
  const data = useSelector((state) => state.userData);
  // const dispatch = useDispatch();
  // const { setUserdata } = bindActionCreators(actionCreators, dispatch);

  const [Usertype, setUsertype] = useState(2);

  const db = getDatabase();

  //console.log("data:", data);

  const [userSchedules, setUserSchedules] = useState([]);
  // const [isAdmin, setAdmin] = useState(false)
  const [desc, setDesc] = useState("");

  const fetchData = async () => {
    try {
      const getData = await get(child(ref(getDatabase()), `users/${data.uid}`));
      const schedules = await getData.val().schedules;

      //console.log("getData:", schedules);
      setUserSchedules(schedules);
      setDesc(getData.val().description);
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data.uid]);

  return (
    <div className="h-[82vh] bg-[#cfb1de] rounded-xl mt-[20px] flex flex-col justify-around items-center">
      <div className="w-[90%] h-[35%] ">
        <p>User Details</p>
        <div className="w-[100%] h-[100%] bg-[#FFFFFF] py-[15px] flex justify-around">
          <div className="w-[20%] h-[100%]">
            <Image width={100} height={100} src={data.profile_picture} />
          </div>
          <div className="w-[30%] h-[100%]">
            <div className="flex flex-col h-[100%] justify-between">
              <div>
                <p>Name</p>
                <p className="text-[#8037A9]">{data.username}</p>
              </div>
              <div>
                <p>Email</p>
                <p className="text-[#8037A9]">{data.email}</p>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[100%]">
            <div>
              <p>Description</p>
              <p className="text-[#8037A9]">{desc} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[40%] ">
        
        <div className="w-[100%] h-[100%] flex justify-between ">
        
          <div className="w-[50%] h-[100%] bg-[#FFFF] py-2  justify-start items-center overflow-auto border-8">
          <p>Upcoming Meetings</p>
            {userSchedules &&
                Object.entries(userSchedules).map((item, index) => {
                  //console.log("item:", item[1]);
                  return (
                    <>
                      <div
                        key={index}
                        className="w-[97%] h-12 bg-[#CFB1DE] flex  justify-around items-center mb-2 mx-auto text-sm"
                      >
                        <div className="flex justify-center items-center gap-6 font-medium text-xs">
                          <p>{item[1].time}</p>
                          {/* <p>{item[1]}</p> */}
                        </div>
                        <p className="font-medium border-l-2 pl-2">
                          {item[1].with}
                        </p>
                      </div>
                    </>
                  );
                })
            }
          </div>

          {data.isAdmin ? (
            (
              <div className="w-[50%] h-[100%] bg-[#FFFF] py-2  justify-start items-center overflow-auto border-8">
                <p>Requested Meetings</p>
            {
             Object.entries(data.adminSlot.pendingReq)?.map(function (item, index) {
                  //console.log("item:", item);
                return(
                  <>
                      <div
                        key={index}
                        className="w-[97%] h-12 bg-[#CFB1DE] flex  justify-around items-center mb-2 mx-auto text-sm"
                      >
                        <div className="flex justify-center items-center gap-6 font-medium text-xs">
                          <p>{item[1].email}</p>
                          {/* <p>{item[1]}</p> */}
                        </div>
                        <p className="font-medium border-l-2 pl-2">
                          {item[1].time}
                        </p>
                      </div>
                    </>
                )
              })

            }
          </div>
            )
          ) : (
            <div>
              <div
                className="bg-[#30a58e] py-3 px-6 rounded cursor-pointer"
                onClick={() => {
                  window.location.href =
                    "http://localhost:3000/schedule/creatorList";
                }}
              >
                New Meeting
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
