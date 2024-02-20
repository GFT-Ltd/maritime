// import React from "react";
// import "./Bot.css";
// import BotImage from "../../../Assets/bot.png";

// function Bot() {
//   const openModal = () => {
//     const modal = document.getElementById("exampleModal");
//     const modalInstance = new window.bootstrap.Modal(modal);
//     modalInstance.show();
//   };

//   return (
//     <div className="bot-modal">
//       <img
//         src={BotImage}
//         className="bot-image"
//         alt="bot-logo"
//         onClick={openModal}
//       />

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">
//                 Marine GPT
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               Write
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Bot;

import React, { useState, useEffect } from "react";
import "./Bot.css";
import BotImage from "../../../Assets/bot.png";

function Bot() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="bot-modal">
      <img
        src={BotImage}
        className="bot-image"
        alt="bot-logo"
        onClick={openModal}
      />

      {isModalOpen && (
        <>
          <div className="backdrop" onClick={closeModal}></div>
          <div className="custom-modal">
            <div className="modal-content">
              <h1 className="modal-title fs-5">Maritime Bot</h1>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Hello! Welcome</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      How can I assist you today ?
                    </h6>
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}

                    <div className="alert alert-dark" role="alert">
                      Routes
                    </div>
                    <div className="alert alert-dark" role="alert">
                      Track my order status
                    </div>
                    <div className="alert alert-dark" role="alert">
                      My package is delayed
                    </div>
                  </div>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your query"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Bot;
