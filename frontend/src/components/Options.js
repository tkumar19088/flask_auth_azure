import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
} from "@mui/material";

const options = [
  {
    label: "Customer",
    subOptions: ["Customer", "Sub Option 2"],
  },
  {
    label: "Location",
    subOptions: ["Sub Option 3", "Sub Option 4"],
  },
  {
    label: "Bramd",
    subOptions: ["Sub Option 3", "Sub Option 4"],
  },
];

const MultiLevelMultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div>
      <h1>Multi-Level Multi-Select</h1>
      <FormControl sx={{ width: "300px" }}>
        <InputLabel></InputLabel>
        <Select
          multiple
          value={selectedOptions}
          onChange={(e) => handleOptionChange(e.target.value)}
          renderValue={(selected) => selected.join(", ")}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.label}>
              <ListItemText primary={option.label} />
              <Select sx={{border:"1px solid red"}}
                multiple
                value={selectedOptions.filter((opt) =>
                  opt.startsWith(option.label)
                )}
                onChange={(e) =>
                  handleOptionChange([
                    ...selectedOptions.filter(
                      (opt) => !opt.startsWith(option.label)
                    ),
                    ...e.target.value,
                  ])
                }
              >
                {option.subOptions.map((subOption, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    value={`${option.label} - ${subOption}`}
                  >
                    <Checkbox
                      checked={selectedOptions.includes(
                        `${option.label} - ${subOption}`
                      )}
                    />
                    <ListItemText primary={subOption} />
                  </MenuItem>
                ))}
              </Select>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultiLevelMultiSelect;

// <Checkbox checked={selectedOptions.includes(option.label)} />;
