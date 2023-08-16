import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import "./Option2.css";

const MultiLevelSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedChildOption, setSelectedChildOption] = useState("");
  const [selectedGrandchildOption, setSelectedGrandchildOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedChildOption("");
    setSelectedGrandchildOption("");
  };

  const handleChildOptionChange = (event) => {
    setSelectedChildOption(event.target.value);
    setSelectedGrandchildOption("");
  };

  const handleGrandchildOptionChange = (event) => {
    setSelectedGrandchildOption(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel>Select an Option</InputLabel>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          label="Select an Option"
        >
         
          <MenuItem value="option1">Customer</MenuItem>
          <MenuItem value="option2">Location</MenuItem>
          <MenuItem value="option3">Business Unit</MenuItem>
        </Select>
      </FormControl>
      {selectedOption === "option1" && (
        <FormControl variant="outlined">
          <InputLabel>Select a Child Option for Option 1</InputLabel>
          <Select
            value={selectedChildOption}
            onChange={handleChildOptionChange}
            label="Select a Child Option for Option 1"
          >
            
            <MenuItem value="childOption1">Amazon</MenuItem>
            <MenuItem value="childOption2">Tesco</MenuItem>
          </Select>
        </FormControl>
      )}
      {selectedOption === "option2" && (
        <FormControl variant="outlined">
          <InputLabel>Select a Child Option for Option 1</InputLabel>
          <Select
            value={selectedChildOption}
            onChange={handleChildOptionChange}
            label="Select a Child Option for Option 1"
          >
            
            <MenuItem value="childOption1">United Kingdom</MenuItem>
            <MenuItem value="childOption2">US</MenuItem>
          </Select>
        </FormControl>
      )}
      {selectedOption === "option3" && (
        <FormControl variant="outlined">
          <InputLabel>Select a Child Option for Option 1</InputLabel>
          <Select
            value={selectedChildOption}
            onChange={handleChildOptionChange}
            label="Select a Child Option for Option 1"
          >
            
            <MenuItem value="childOption1">Health</MenuItem>
            <MenuItem value="childOption2">Hygeine</MenuItem>
            <MenuItem value="childOption3">Nutrition</MenuItem>
          </Select>
        </FormControl>
      )}
     
      {/* ... and so on for more levels */}
    </div>
  );
};

export default MultiLevelSelect;
// {selectedChildOption === "childOption1" && (
//     <FormControl variant="outlined">
//       <InputLabel>Select a Grandchild Option for Child Option 1</InputLabel>
//       <Select
//         value={selectedGrandchildOption}
//         onChange={handleGrandchildOptionChange}
//         label="Select a Grandchild Option for Child Option 1"
//       >
//         <MenuItem value="">
//           <em>None</em>
//         </MenuItem>
//       </Select>
//     </FormControl>
//   )}