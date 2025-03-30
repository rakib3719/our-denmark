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
import { FaUserCircle, FaBell, FaSignOutAlt, FaPhone, FaLocationArrow, FaMobile, FaFileImport, FaKey, FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Menu, MenuItem, Avatar, Badge } from "@mui/material";
import { motion } from "framer-motion";

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
    menuName: "জিরো রিটান দাখিল",
    link: "/zero-return",
    icon: <FaFileImport />,  
  },
  {
    menuName: "ইউজার পাস সেট",
    link: "/user-pass-set",
    icon: <FaKey />,  
  },
  {
    menuName: "রিচাজ",
    link: "/recharge",
    icon: <FaMoneyBillWave />, 
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
    menuName: "এন আইডি টু নম্বর",
    icon: <LiaIdCardSolid />,
    submenu: [
      {
        menuName: "গ্রামীণ বায়োমেক্ট্রিস",
        link: "/nid-to-all",
        icon: <Inbox />,
      },
      {
        menuName: "NID to (গ্রামীন )",
        link: "/nid-to-gp",
        icon: <Mail />,
      },
      {
        menuName: " NID to (রবি/এয়ারটেল)  ",
        link: "/nid-to-robi-airtel",
        icon: <Mail />,
      },
      {
        menuName: "NID To (বাংলালিংক)",
        link: "/nid-to-bl",
        icon: <Mail />,
      },
    ],
  },
  {
    menuName: "কল লিষ্ট অরডার",
    icon: <FaPhone/>,
    submenu: [
      {
        menuName: "কল লিষ্ট (৩ মাসের জন্য)",
        link: "/call-list3",
        icon: <Inbox />,
      },
      {
        menuName: "কল লিষ্ট (৬ মাসের জন্য)",
        link: "/call-list6",
        icon: <Mail />,
      }
    ],
  },
  {
    menuName: "লোকেশন",
    icon: <FaLocationArrow/>,
    submenu: [
      {
        menuName: "গ্রামীণ(লোকেশন)",
        link: "/gp-location",
        icon: <Inbox />,
      },
      {
        menuName: "বাংলালিংক(লোকেশন)",
        link: "/bl-location",
        icon: <Mail />,
      },
      {
        menuName: "রবি / এয়ারটেল(লোকেশন)",
        link: "/robi-airtel-location",
        icon: <Mail />,
      }
    ],
  },
  {
    menuName: "বিকাশ ইনফো",
    icon: <FaMobile/>,
    submenu: [
      {
        menuName: "বিকাশ ইনফো",
        link: "/bkash-info",
        icon: <Inbox />,
      },
      {
        menuName: "নগদ ইনফো",
        link: "/nagad-info",
        icon: <Mail />,
      },
      {
        menuName: "রকেট ইনফো",
        link: "/rocket-info",
        icon: <Mail />,
      }
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationCount, setNotificationCount] = React.useState(3);
  const [balance, setBalance] = React.useState(98);
  const profileMenuOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const toggleSubmenu = (menuName) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic here
    handleProfileMenuClose();
    console.log("User logged out");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar 
        position="fixed" 
        open={open} 
        className="bg-primary border-b border-gray-300 text-black"
        style={{
          color: 'black',
          boxShadow: 'none',
        }}
      >
        <Toolbar className="flex justify-between">
          <div className="flex items-center">
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
          </div>

          <div className="flex items-center gap-4">
            {/* Balance Display */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full"
            >
              <MdOutlineAccountBalanceWallet className="text-xl" />
              <span className="font-bold">{balance} টাকা</span>
            </motion.div>

            {/* Notification Icon with Animation */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton color="inherit" aria-label="notifications">
                <Badge 
                  badgeContent={notificationCount} 
                  color="error"
                  overlap="circular"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                  >
                    <FaBell className="text-xl" />
                  </motion.div>
                </Badge>
              </IconButton>
            </motion.div>

            {/* Profile Avatar with Dropdown */}
            <div>
              <IconButton
                onClick={handleProfileMenuOpen}
                aria-controls={profileMenuOpen ? 'profile-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={profileMenuOpen ? 'true' : undefined}
              >
                <Avatar 
                  sx={{ width: 32, height: 32 }}
                  className="bg-white text-primary"
                >
                  <FaUserCircle className="text-2xl" />
                </Avatar>
              </IconButton>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={profileMenuOpen}
                onClose={handleProfileMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'profile-button',
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleProfileMenuClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleProfileMenuClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem 
                  onClick={handleLogout}
                  className="text-red-500"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            overflowY: "auto",
            scrollbarWidth: "none", /* Firefox scrollbar hide */
            "&::-webkit-scrollbar": {
              display: "none", /* Chrome, Safari scrollbar hide */
            },
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
   className=""   >
        <DrawerHeader className="bg-primary">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

    <div className="bg-primary">
    <List className="bg-primary h-full min-h-screen">
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
                    <List component="div" disablePadding sx={{ pl: 2 }}>
                      {item.submenu.map((sub) => (
                        <ListItem key={sub.menuName} disablePadding>
                          <ListItemButton component={Link} href={sub.link}>
                            <ListItemIcon className="-mr-4">{sub.icon}</ListItemIcon>
                            <ListItemText primary={sub.menuName} className=" text-sm" />
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
    </div>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}