// import React, { useState } from "react";
// import "./Calendar.css";

// const Calendar = ({ forecastData }) => {
//   const [calendar, setCalendar] = useState(new Date());

//   const calWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const calMonthName = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const daysInMonth = (month, year) => {
//     return new Date(year, month, 0).getDate();
//   };

//   const firstDay = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
//   };

//   const lastDay = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
//   };

//   const firstDayNumber = () => {
//     return firstDay().getDay() + 1;
//   };

//   const lastDayNumber = () => {
//     return lastDay().getDay() + 1;
//   };

//   const getPreviousMonthLastDate = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth(), 0).getDate();
//   };

//   const navigateToPreviousMonth = () => {
//     setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() - 1));
//   };

//   const navigateToNextMonth = () => {
//     setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() + 1));
//   };

//   const navigateToCurrentMonth = () => {
//     setCalendar(new Date());
//   };

//   const displayYear = () => {
//     return calendar.getFullYear();
//   };

//   const displayMonth = () => {
//     return calMonthName[calendar.getMonth()];
//   };

//   const selectDate = (day) => {
//     console.log(
//       `${day} ${calMonthName[calendar.getMonth()]} ${calendar.getFullYear()}`
//     );
//   };

//   const plotDayNames = () => {
//     return calWeekDays.map((day, index) => <div key={index}>{day}</div>);
//   };

//   const today = new Date();
//   const todayWeekDay = calWeekDays[today.getDay()];
//   const todayDate = today.getDate();
//   const todayMonthName = calMonthName[today.getMonth()];
//   const todayYear = today.getFullYear();

//   const plotDates = () => {
//     const calendarDays = daysInMonth(
//       calendar.getMonth() + 1,
//       calendar.getFullYear()
//     );
//     const prevMonthDatesArray = [];
//     let count = 1;
//     let prevDateCount = 0;

//     const prevMonthLastDate = getPreviousMonthLastDate();
//     for (let i = 1; i < calendarDays; i++) {
//       if (i < firstDayNumber()) {
//         prevDateCount += 1;
//         prevMonthDatesArray.push(prevMonthLastDate - i + 1);
//       } else {
//         count++;
//       }
//     }

//     const dates = [];
//     for (let i = 1; i <= calendarDays; i++) {
//       dates.push(
//         <div className="number-item" key={i} onClick={() => selectDate(i)}>
//           <a className="dateNumber" href="#">
//             {i}
//           </a>
//         </div>
//       );
//     }

//     return [...Array(firstDayNumber() - 1)]
//       .map((_, index) => (
//         <div className="prev-dates" key={`prev-${index}`}>
//           {prevMonthDatesArray.pop()}
//         </div>
//       ))
//       .concat(dates);
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-inner">
//         <div className="calendar-controls">
//           <div className="calendar-prev">
//             <a href="#" onClick={navigateToPreviousMonth}>
//               &lt;
//             </a>
//           </div>
//           <div className="calendar-year-month">
//             <div className="calendar-month-label">{displayMonth()}</div>
//             <div>-</div>
//             <div className="calendar-year-label">{displayYear()}</div>
//           </div>
//           <div className="calendar-next">
//             <a href="#" onClick={navigateToNextMonth}>
//               &gt;
//             </a>
//           </div>
//         </div>
//         <div className="calendar-today-date">
//           Today: {todayWeekDay}, {todayDate}, {todayMonthName} {todayYear}
//         </div>
//         <div className="calendar-body">
//           {plotDayNames()}
//           {plotDates()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;

// import React, { useState } from "react";
// import "./Calendar.css";
// import WeatherModal from "./WeatherModal/WeatherModal";

// const Calendar = ({ forecastData }) => {
//   const [calendar, setCalendar] = useState(new Date());
//   const [modalContent, setModalContent] = useState(null);
//   const [modalData, setModalData] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const calWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const calMonthName = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const daysInMonth = (month, year) => {
//     return new Date(year, month, 0).getDate();
//   };

//   const firstDay = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
//   };

//   const lastDay = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
//   };

//   const firstDayNumber = () => {
//     return firstDay().getDay() + 1;
//   };

//   const lastDayNumber = () => {
//     return lastDay().getDay() + 1;
//   };

//   const getPreviousMonthLastDate = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth(), 0).getDate();
//   };

//   const navigateToPreviousMonth = () => {
//     setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() - 1));
//   };

//   const navigateToNextMonth = () => {
//     setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() + 1));
//   };

//   const navigateToCurrentMonth = () => {
//     setCalendar(new Date());
//   };

//   const displayYear = () => {
//     return calendar.getFullYear();
//   };

//   const displayMonth = () => {
//     return calMonthName[calendar.getMonth()];
//   };

//   const selectDate = (day) => {
//     const clickedDate = new Date(
//       calendar.getFullYear(),
//       calendar.getMonth(),
//       day + 1
//     ); // Increment day by 1
//     const clickedDateString = clickedDate.toISOString().split("T")[0]; // Format clicked date as YYYY-MM-DD

//     // Access the weather array inside the data object
//     const weatherArray = forecastData.data.weather;

//     // Find the data for the clicked date
//     const dataForDate = weatherArray.find(
//       (entry) => entry.date === clickedDateString
//     );
//     console.log("data for Date : ", dataForDate);

//     if (dataForDate) {
//       setModalData(dataForDate);
//       setIsModalOpen(true);
//     } else {
//       setModalData(null);
//       setIsModalOpen(false);
//       alert("No data available for this date.");
//     }
//   };

//   console.log("forecastData:", forecastData);
//   //   console.log("forecastData.data:", forecastData.data);

//   const plotDayNames = () => {
//     return calWeekDays.map((day, index) => <div key={index}>{day}</div>);
//   };

//   const today = new Date();
//   const todayWeekDay = calWeekDays[today.getDay()];
//   const todayDate = today.getDate();
//   const todayMonthName = calMonthName[today.getMonth()];
//   const todayYear = today.getFullYear();

//   const plotDates = () => {
//     const calendarDays = daysInMonth(
//       calendar.getMonth() + 1,
//       calendar.getFullYear()
//     );
//     const prevMonthDatesArray = [];
//     let count = 1;
//     let prevDateCount = 0;

//     const prevMonthLastDate = getPreviousMonthLastDate();
//     for (let i = 1; i < calendarDays; i++) {
//       if (i < firstDayNumber()) {
//         prevDateCount += 1;
//         prevMonthDatesArray.push(prevMonthLastDate - i + 1);
//       } else {
//         count++;
//       }
//     }

//     const dates = [];
//     for (let i = 1; i <= calendarDays; i++) {
//       dates.push(
//         <div className="number-item" key={i} onClick={() => selectDate(i)}>
//           <a className="dateNumber" href="#">
//             {i}
//           </a>
//         </div>
//       );
//     }

//     return [...Array(firstDayNumber() - 1)]
//       .map((_, index) => (
//         <div className="prev-dates" key={`prev-${index}`}>
//           {prevMonthDatesArray.pop()}
//         </div>
//       ))
//       .concat(dates);
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-inner">
//         <div className="calendar-controls">
//           <div className="calendar-prev">
//             <a href="#" onClick={navigateToPreviousMonth}>
//               &lt;
//             </a>
//           </div>
//           <div className="calendar-year-month">
//             <div className="calendar-month-label">{displayMonth()}</div>
//             <div>-</div>
//             <div className="calendar-year-label">{displayYear()}</div>
//           </div>
//           <div className="calendar-next">
//             <a href="#" onClick={navigateToNextMonth}>
//               &gt;
//             </a>
//           </div>
//         </div>
//         <div className="calendar-today-date">
//           Today: {todayWeekDay}, {todayDate}, {todayMonthName} {todayYear}
//         </div>
//         <div className="calendar-body">
//           {plotDayNames()}
//           {plotDates()}
//         </div>
//       </div>
//       {modalContent && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={() => setModalContent(null)}>
//               &times;
//             </span>
//             <div>{/* Render modal content here */}</div>
//           </div>
//         </div>
//       )}
//       <WeatherModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         data={modalData}
//       />
//     </div>
//   );
// };

// export default Calendar;

// import React, { useState } from "react";
// import "./Calendar.css";
// import WeatherModal from "./WeatherModal/WeatherModal"

// const Calendar = ({ forecastData }) => {
//   const [calendar, setCalendar] = useState(new Date());
//   const [selectedData, setSelectedData] = useState(null);

//   const calWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const calMonthName = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const daysInMonth = (month, year) => {
//     return new Date(year, month, 0).getDate();
//   };

//   const firstDay = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
//   };

//   const lastDay = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
//   };

//   const firstDayNumber = () => {
//     return firstDay().getDay() + 1;
//   };

//   const lastDayNumber = () => {
//     return lastDay().getDay() + 1;
//   };

//   const getPreviousMonthLastDate = () => {
//     return new Date(calendar.getFullYear(), calendar.getMonth(), 0).getDate();
//   };

//   const navigateToPreviousMonth = () => {
//     setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() - 1));
//   };

//   const navigateToNextMonth = () => {
//     setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() + 1));
//   };

//   const navigateToCurrentMonth = () => {
//     setCalendar(new Date());
//   };

//   const displayYear = () => {
//     return calendar.getFullYear();
//   };

//   const displayMonth = () => {
//     return calMonthName[calendar.getMonth()];
//   };

//   //   const selectDate = (day) => {
//   //     const clickedDate = new Date(
//   //       calendar.getFullYear(),
//   //       calendar.getMonth(),
//   //       day + 1
//   //     ); // Increment day by 1
//   //     const clickedDateString = clickedDate.toISOString().split("T")[0]; // Format clicked date as YYYY-MM-DD

//   //     // Access the weather array inside the data object
//   //     const weatherArray = forecastData.data.weather;

//   //     // Find the data for the clicked date
//   //     const dataForDate = weatherArray.find(
//   //       (entry) => entry.date === clickedDateString
//   //     );
//   //     console.log("data for Date : ", dataForDate);

//   //     if (dataForDate) {
//   //       setModalData(dataForDate);
//   //       setIsModalOpen(true);
//   //     } else {
//   //       setModalData(null);
//   //       setIsModalOpen(false);
//   //       alert("No data available for this date.");
//   //     }
//   //   };

//   const selectDate = (day, e) => {
//     e.preventDefault();
//     const clickedDate = new Date(
//       calendar.getFullYear(),
//       calendar.getMonth(),
//       day + 1
//     ); // Increment day by 1
//     const clickedDateString = clickedDate.toISOString().split("T")[0]; // Format clicked date as YYYY-MM-DD

//     // Access the weather array inside the data object
//     const weatherArray = forecastData.data.weather;

//     // Find the data for the clicked date
//     const dataForDate = weatherArray.find(
//       (entry) => entry.date === clickedDateString
//     );
//     console.log("data for Date : ", dataForDate);
//     setSelectedData(dataForDate);
//   };

//   const plotDayNames = () => {
//     return calWeekDays.map((day, index) => <div key={index}>{day}</div>);
//   };

//   const today = new Date();
//   const todayWeekDay = calWeekDays[today.getDay()];
//   const todayDate = today.getDate();
//   const todayMonthName = calMonthName[today.getMonth()];
//   const todayYear = today.getFullYear();

//   const plotDates = () => {
//     const calendarDays = daysInMonth(
//       calendar.getMonth() + 1,
//       calendar.getFullYear()
//     );
//     const prevMonthDatesArray = [];
//     let count = 1;
//     let prevDateCount = 0;

//     const prevMonthLastDate = getPreviousMonthLastDate();
//     for (let i = 1; i < calendarDays; i++) {
//       if (i < firstDayNumber()) {
//         prevDateCount += 1;
//         prevMonthDatesArray.push(prevMonthLastDate - i + 1);
//       } else {
//         count++;
//       }
//     }

//     const dates = [];
//     for (let i = 1; i <= calendarDays; i++) {
//       dates.push(
//         <div className="number-item" key={i} onClick={(e) => selectDate(i, e)}>

//           <a className="dateNumber" href="#">
//             {i}
//           </a>
//         </div>
//       );
//     }

//     return [...Array(firstDayNumber() - 1)]
//       .map((_, index) => (
//         <div className="prev-dates" key={`prev-${index}`}>
//           {prevMonthDatesArray.pop()}
//         </div>
//       ))
//       .concat(dates);
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-inner">
//         <div className="calendar-controls">
//           <div className="calendar-prev">
//             <a href="#" onClick={navigateToPreviousMonth}>
//               &lt;
//             </a>
//           </div>
//           <div className="calendar-year-month">
//             <div className="calendar-month-label">{displayMonth()}</div>
//             <div>-</div>
//             <div className="calendar-year-label">{displayYear()}</div>
//           </div>
//           <div className="calendar-next">
//             <a href="#" onClick={navigateToNextMonth}>
//               &gt;
//             </a>
//           </div>
//         </div>
//         <div className="calendar-today-date">
//           Today: {todayWeekDay}, {todayDate}, {todayMonthName} {todayYear}
//         </div>
//         <div className="calendar-body">
//           {plotDayNames()}
//           {plotDates()}
//         </div>
//       </div>
//       <WeatherModal
//       isOpen={selectedData !== null} // Ensure selectedData is not null
//       onClose={() => setSelectedData(null)} // Correctly close the modal
//       data={selectedData}
//     />
//     </div>
//   );
// };

// export default Calendar;

import React, { useState } from "react";
import "./Calendar.css";
import WeatherModal from "./WeatherModal/WeatherModal";

const Calendar = ({ forecastData }) => {
  const [calendar, setCalendar] = useState(new Date());
  const [selectedData, setSelectedData] = useState(null);

  const calWeekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calMonthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const firstDay = () => {
    return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
  };

  const lastDay = () => {
    return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
  };

  const firstDayNumber = () => {
    return firstDay().getDay() + 1;
  };

  const lastDayNumber = () => {
    return lastDay().getDay() + 1;
  };

  const getPreviousMonthLastDate = () => {
    return new Date(calendar.getFullYear(), calendar.getMonth(), 0).getDate();
  };

  const navigateToPreviousMonth = () => {
    setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() - 1));
  };

  const navigateToNextMonth = () => {
    setCalendar(new Date(calendar.getFullYear(), calendar.getMonth() + 1));
  };

  const navigateToCurrentMonth = () => {
    setCalendar(new Date());
  };

  const displayYear = () => {
    return calendar.getFullYear();
  };

  const displayMonth = () => {
    return calMonthName[calendar.getMonth()];
  };

  // const selectDate = (day, e) => {
  //   e.preventDefault();
  //   const clickedDate = new Date(
  //     calendar.getFullYear(),
  //     calendar.getMonth(),
  //     day + 1
  //   );
  //   const clickedDateString = clickedDate.toISOString().split("T")[0];

  //   const weatherArray = forecastData.data.weather;
  //   const dataForDate = weatherArray.find(
  //     (entry) => entry.date === clickedDateString
  //   );

  //   console.log("Selected data:", dataForDate);
  //   setSelectedData(dataForDate);
  // };

  const selectDate = (day, e) => {
    e.preventDefault();
    const clickedDate = new Date(
      calendar.getFullYear(),
      calendar.getMonth(),
      day + 1
    );
    const clickedDateString = clickedDate.toISOString().split("T")[0];

    const weatherArray = forecastData?.data?.weather; // Add optional chaining here
    if (weatherArray) {
      const dataForDate = weatherArray.find(
        (entry) => entry.date === clickedDateString
      );

      if (dataForDate) {
        setSelectedData(dataForDate);
      } else {
        alert("No weather data available for selected date.");
      }
    } else {
      alert("Please enter or select location to show forecast.");
    }
  };

  const plotDayNames = () => {
    return calWeekDays.map((day, index) => <div key={index}>{day}</div>);
  };

  const today = new Date();
  const todayWeekDay = calWeekDays[today.getDay()];
  const todayDate = today.getDate();
  const todayMonthName = calMonthName[today.getMonth()];
  const todayYear = today.getFullYear();

  const plotDates = () => {
    const calendarDays = daysInMonth(
      calendar.getMonth() + 1,
      calendar.getFullYear()
    );
    const prevMonthDatesArray = [];
    let count = 1;
    let prevDateCount = 0;

    const prevMonthLastDate = getPreviousMonthLastDate();
    for (let i = 1; i < calendarDays; i++) {
      if (i < firstDayNumber()) {
        prevDateCount += 1;
        prevMonthDatesArray.push(prevMonthLastDate - i + 1);
      } else {
        count++;
      }
    }

    const dates = [];
    for (let i = 1; i <= calendarDays; i++) {
      dates.push(
        <div className="number-item" key={i} onClick={(e) => selectDate(i, e)}>
          <a className="dateNumber">{i}</a>
        </div>
      );
    }

    return [...Array(firstDayNumber() - 1)]
      .map((_, index) => (
        <div className="prev-dates" key={`prev-${index}`}>
          {prevMonthDatesArray.pop()}
        </div>
      ))
      .concat(dates);
  };

  console.log("Is modal open?", selectedData !== null);

  return (
    <div className="calendar">
      <div className="calendar-inner">
        <div className="calendar-controls">
          <div className="calendar-prev">
            <a onClick={navigateToPreviousMonth}>&lt;</a>
          </div>
          <div className="calendar-year-month">
            <div className="calendar-month-label">{displayMonth()}</div>
            <div>-</div>
            <div className="calendar-year-label">{displayYear()}</div>
          </div>
          <div className="calendar-next">
            <a onClick={navigateToNextMonth}>&gt;</a>
          </div>
        </div>
        <div className="calendar-today-date">
          Today: {todayWeekDay}, {todayDate}, {todayMonthName} {todayYear}
        </div>
        <div className="calendar-body">
          {plotDayNames()}
          {plotDates()}
        </div>
      </div>
      <WeatherModal
        isOpen={selectedData !== null}
        onClose={() => setSelectedData(null)}
        data={selectedData}
      />
    </div>
  );
};

export default Calendar;
