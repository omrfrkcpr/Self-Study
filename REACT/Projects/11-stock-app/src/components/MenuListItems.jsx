import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const getIcon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    icon: getIcon("ic_analytics"),
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: getIcon("purchase"),
  },
  {
    title: "Sales",
    url: "/stock/sales",
    icon: getIcon("sales"),
  },
  {
    title: "Firms",
    url: "/stock/firms",
    icon: getIcon("firms"),
  },
  {
    title: "Brands",
    url: "/stock/brands",
    icon: getIcon("brand"),
  },
  {
    title: "Products",
    url: "/stock/products",
    icon: getIcon("ic_cart"),
  },
];

const iconStyle = {
  color: "secondary.main",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "secondary.main",
    color: "white",
  },
  gap: 1,
};
const selectedStyle = {
  backgroundColor: "secondary.second",
  borderRadius: "1rem",
  "&:hover": {
    backgroundColor: "secondary.main",
    color: "secondary.second",
  },
  color: "white",
  gap: 1,
};

const MenuListItems = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div>
      <Toolbar />
      <List>
        {links.map(({ title, url, icon }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => navigate(url)}
              sx={pathname === url ? selectedStyle : iconStyle}
            >
              {/* <ListItemIcon>
                <Box
                  sx={{
                    backgroundImage: `url(${icon})`,
                    width: 24,
                    height: 24,
                    bgcolor: "red",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </ListItemIcon> */}
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  mask: `url(${icon}) no-repeat center / contain`,
                  bgcolor: "currentcolor",
                }}
              />
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
