import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function App(data) {
    console.log(data);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }



//   const selectTime = (slot) => {
//     const db = getDatabase();
//     set(ref(db, "users/" + "user.uid"), {
//       username: user.displayName,
//       description:"I am a new user",
//       email: user.email,
//       profile_picture: user.photoURL,
//       uid: user.uid,
//       schedules: [
//         { meetId: "", start: "", end: "" },
//         { meetId: "", start: "", end: "" },
//       ],
//       isAdmin: false,
//     });
//   }

  return (
    <div>
      <button onClick={openModal} className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Select any available slot</h2>
        <div >
            {data.timeSlots.map((slot) => (
                <div 
                // onClick={selectTime(slot)}
                 className="cursor-pointer bg-slate-700 text-white p-5 mb-1 flex flex-row gap-7 hover:bg-slate-600" key={slot}>
                    <p>{slot.split(',')[0]}</p> <p>{slot.split(',')[1]}</p>
                </div>
            ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;