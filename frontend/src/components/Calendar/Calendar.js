import * as React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  subWeeks,
  addWeeks,
} from "date-fns";

import Licon from "../../images/Leftarrow-cal.png";
import Ricon from "../../images/Rightarrow-cal.png";

import "./Calendar.css";

function Calendar() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  // const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [currentWeekStart, setCurrentWeekStart] = React.useState(
    startOfWeek(new Date())
  );

  const now = new Date();
  const startOfCurrentWeek = currentWeekStart;
  const endOfCurrentWeek = endOfWeek(startOfCurrentWeek);
  const days = eachDayOfInterval({
    start: startOfCurrentWeek,
    end: endOfCurrentWeek,
  });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleTodayClick = () => {
    setSelectedDate(now);
    setCurrentWeekStart(startOfWeek(now));
  };

  React.useEffect(() => {
    setSelectedDate(now);
  }, []);

  const handlePrevWeek = () => {
    setCurrentWeekStart((prevWeekStart) => subWeeks(prevWeekStart, 1));
    // setCurrentMonth((prevMonth) => subWeeks(prevMonth, 1));
  };

  const handleNextWeek = () => {
    setCurrentWeekStart((prevWeekStart) => addWeeks(prevWeekStart, 1));
    // setCurrentMonth((prevMonth) => addWeeks(prevMonth, 1));
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        width="94%"
        marginLeft="15px"
        marginTop="15px"
        // alignItems="center"
        // mb={12}
      >
        <Box display="flex" alignItems="center">
          <Typography
            fontSize={{ lg: 28, xs: 16 }}
            sx={{ marginRight: "10px" }}
            marginLeft="18px"
          >
            {format(startOfCurrentWeek, "MMMM YYY")}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Typography
            variant="body2"
            style={{
              borderRadius: "20px 20px",
              backgroundColor: "#FFF",
              padding: "4px 17px",
              textAlign: "center",
              color: "#FF593D",
              cursor: "pointer",
            }}
            fontWeight={600}
            onClick={handleTodayClick}
          >
            Today
          </Typography>
          <Box ml={1}>
            <IconButton onClick={handlePrevWeek}>
              <img alt="" src={Licon} className="btn-lr" />
            </IconButton>
            <IconButton onClick={handleNextWeek}>
              <img alt="" src={Ricon} className="btn-lr" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        marginTop="5px"
        // fontWeight={700}
      >
        {weekDays.map((day) => (
          <Typography
            variant="body2"
            key={day}
            sx={{
              width: "14.2840%",
              textAlign: "center",
              color: "#E7E9EE",
              fontWeight: 700,
            }}
          >
            {day}
          </Typography>
        ))}
        {days.map((day) => (
          <Typography
            key={day}
            variant={isSameDay(day, selectedDate) ? "body1" : "body2"}
            onClick={() => handleDayClick(day)}
            sx={{
              marginTop: "-5px",
              width: { lg: "14.2850%", xs: "13.2857%" },
              textAlign: "center",
              cursor: "pointer",
              lineHeight: isSameDay(day, selectedDate)
                ? { lg: "40px", xs: "43px" }
                : { lg: "57px", xs: "43px" },
              // marginLeft: isSameDay(day, selectedDate) ? "0px" : "-8px",
              // borderRadius: "50%",

              // backgroundColor: isSameDay(day, selectedDate)
              //   ? "#fff"
              //   : "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: isSameDay(day, selectedDate) ? "#000" : "#FFF",
              fontSize: isSameDay(day, selectedDate) ? "1.2rem" : "1rem",
            }}
          >
            <Typography
              sx={{
                backgroundColor: isSameDay(day, selectedDate)
                  ? "#fff"
                  : "transparent",
                marginTop: isSameDay(day, selectedDate) ? "9px" : "12px",
                padding: isSameDay(day, selectedDate) ? "6px" : "4px",
                borderRadius: "50%",
                lineHeight: "1.2",
                fontWeight: isSameDay(day, selectedDate) ? "600" : "400",
              }}
            >
              {format(day, "dd")}
            </Typography>
          </Typography>
        ))}
      </Box>
    </div>
  );
}

export default Calendar;
