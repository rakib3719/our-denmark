"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ExpandLess, ExpandMore, Inbox, Mail } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

// icon import
import { MdOutlineAssignment, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoCopyOutline, IoFingerPrintOutline } from "react-icons/io5";
import { LiaIdCardSolid } from "react-icons/lia";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// 🔹 Menu Configuration with Submenus
const menuItems = [
  {
    menuName: "অরডার ড্যাশবোড",
    link: "/",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    menuName: "সাইন কপি অরডার",
    link: "/sign-copy",
    icon: <MdOutlineAssignment />,
  },
  {
    menuName: "সারবার কপি অরডার",
    link: "/server-copy",
    icon: <IoCopyOutline />,
  },
  {
    menuName: "আইডি কাড অরডার",
    link: "/id-card",
    icon: <LiaIdCardSolid />
  },


  {
    menuName: "বায়োমেট্রিক",
    icon: <IoFingerPrintOutline />,
    submenu: [
      {
        menuName: "গ্রামীণ বায়োমেক্ট্রিস",
        link: "/gp-biometric",
        icon: <Inbox />,
      },
      {
        menuName: "বাংলালিংক বায়োমেক্ট্রিস",
        link: "/bl-baiometric",
        icon: <Mail />,
      },
      {
        menuName: "রবি/এয়ারটেল বায়োমেক্ট্রিস",
        link: "/robi-airtel-baiometric",
        icon: <Mail />,
      },
      {
        menuName: "টেলিটক বায়োমেক্ট্রিস",
        link: "/talitalk-baiometric",
        icon: <Mail />,
      },
    ],
  },

  {
    menuName: "Drafts",
    icon: <Mail />,
    submenu: [
      {
        menuName: "Draft 1",
        link: "/drafts-1",
        icon: <Inbox />,
      },
      {
        menuName: "Draft 2",
        link: "/drafts-2",
        icon: <Mail />,
      },
    ],
  },
  {
    menuName: "Sent Emails",
    link: "/sent",
    icon: <Mail />,
  },
];

export default function Layout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [submenuOpen, setSubmenuOpen] = React.useState({});

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const toggleSubmenu = (menuName) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent Drawer with Submenus
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {menuItems.map((item) => (
            <React.Fragment key={item.menuName}>
              {/* 🔹 Simple Menu Item */}
              {!item.submenu ? (
                <ListItem disablePadding>
                  <ListItemButton component={Link} href={item.link} >
                    <ListItemIcon className="-mr-4 items-center"><span className="text-2xl">{item.icon}</span></ListItemIcon>
                    <ListItemText primary={item.menuName} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <>
                  {/* 🔹 Parent Menu Item with Submenu */}
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => toggleSubmenu(item.menuName)}>
                      <ListItemIcon className="-mr-4">{item.icon}</ListItemIcon>
                      <ListItemText primary={item.menuName} />
                      {submenuOpen[item.menuName] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  {/* 🔹 Submenu Items (Collapsible) */}
                  <Collapse in={submenuOpen[item.menuName]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 4 }}>
                      {item.submenu.map((sub) => (
                        <ListItem key={sub.menuName} disablePadding>
                          <ListItemButton component={Link} href={sub.link}>
                            <ListItemIcon className="-mr-4">{sub.icon}</ListItemIcon>
                            <ListItemText primary={sub.menuName} className="whitespace-nowrap text-sm" />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
