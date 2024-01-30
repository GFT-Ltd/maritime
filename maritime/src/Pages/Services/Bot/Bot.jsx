// import React from "react";
// import "./Bot.css";
// import BotImage from "../../../Assets/bot.png";

// function Bot() {
//   return (
//     <div className="bot-modal">
//       <img src={BotImage} className="bot-image" alt="bot-logo" />

//       <button
//         type="button"
//         class="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         Launch demo modal
//       </button>
//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="exampleModalLabel">
//                 Modal title
//               </h1>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">...</div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" class="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Bot;


import React from "react";
import "./Bot.css";
import BotImage from "../../../Assets/bot.png";

function Bot() {
  const openModal = () => {
    const modal = document.getElementById("exampleModal");
    const modalInstance = new window.bootstrap.Modal(modal);
    modalInstance.show();
  };

  return (
    <div className="bot-modal">
      <img
        src={BotImage}
        className="bot-image"
        alt="bot-logo"
        onClick={openModal}
      />

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Marine GPT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Write 
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bot;
