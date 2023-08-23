import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


  const handleDropdownToggle = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleOptionClick = (path) => {
    //navigate("/");
    setSelectedOption(path); // Update selected option

  };

  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button onClick={handleDropdownToggle}>
          <ListItemIcon>
            {openDropdown ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary="Dropdown 1" />
        </ListItem>
        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => handleOptionClick("/item1")}>
              <ListItemIcon>
                <span>Icon</span>
              </ListItemIcon>
              <ListItemText primary="Item 1" />
            </ListItem>
            {/* Add more dropdown items */}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
