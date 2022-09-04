import React from 'react'
import Image from "next/image";
// import profileImg from "../../.. /public/assets/profile.jpeg";
import { child, get, getDatabase, ref } from 'firebase/database';

import SlotAllocationModal from "./allocateSlot"


const creater = ({userData}) => {
  // get(child(ref(getDatabase()), `users/`)).then(snapshot => {
  //   const data = snapshot.val();
  //   //console.log("data:", Object.entries(data));
  // }).catch(err => {
  //   //console.log(err);
  // })
  //console.log("specipic user data: ", userData);
    return (
      // <>
      // specific user
      // </>
        <div className="h-[82vh] bg-[#cfb1de] rounded-xl mt-[20px] flex flex-col justify-around items-center">
          <div className="w-[90%] h-[35%] ">
            <p>User Details</p>
            <div className="w-[100%] h-[100%] bg-[#FFFFFF] py-[15px] flex justify-around">
              <div className="w-[20%] h-[100%]">
                
                <Image width={100} height={100} src={userData.profile_picture} />
              </div>
              <div className="w-[30%] h-[100%]">
                <div className="flex flex-col h-[100%] justify-between">
                  <div>
                    <p>Name</p>
                    <p className="text-[#8037A9]">{userData.username}</p>
                  </div>
                  <div>
                    <p>Email</p>
                    <p className="text-[#8037A9]">{userData.email}</p>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-full flex flex-col justify-between">
                <div>
                  <p>Description</p>
                  <p className="text-[#8037A9]">
                    blockchain developer{" "}
                  </p>
                </div>
                <div>
                <SlotAllocationModal timeSlots={userData.adminSlot.timeSlot} adminUid={userData.uid} email={userData.email} />
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


export async function getStaticProps({params}) {
  //console.log("params id",params.creatorId);
  const userId = params.creatorId.split('-')[1]
  //console.log("user id :", userId);
  const getUserData = await get(child(ref(getDatabase()), `users/${userId}`))
  return{
    props:{
      userData: getUserData.val()
    },
    revalidate: 1
  }
}
export async function getStaticPaths() {
  const getData = await get(child(ref(getDatabase()), `users/`))
  const data = getData.val()
  
  const paths = Object.entries(data).map(item => {
    const itemId = item[1].uid
    return {
      params:{
        creatorId: `admin-${itemId}`,
      }
    }
  })
  //console.log("paths: ", paths);

  return{
    paths,
    fallback: false,
  }
}