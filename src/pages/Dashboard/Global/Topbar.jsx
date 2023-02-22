import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";

import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../../theme";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Transition from "../../../typography/Transition";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        {/* <IconButton>
          <PersonOutlinedIcon />
        </IconButton> */}
        <div className="relative inline-flex ml-1">
          <button
            ref={trigger}
            className="inline-flex justify-center items-center group"
            aria-haspopup="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user?.photoURL}
              alt=""
            />
            <div className="flex items-center truncate">
              <span className="truncate ml-2 text-sm font-medium">
                <p>{user?.displayName}</p>
              </span>
              <svg
                className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
                viewBox="0 0 12 12"
              >
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </button>

          <Transition
            className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
            show={dropdownOpen}
            enter="transition ease-out duration-200 transform"
            enterStart="opacity-0 -translate-y-2"
            enterEnd="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveStart="opacity-100"
            leaveEnd="opacity-0"
          >
            <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
            >
              <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
                <div className="font-medium text-slate-800">
                  <p>{user?.displayName}</p>
                </div>
                <div className="text-xs text-slate-500 italic">
                  Administrator
                </div>
              </div>
              <ul>
                {/*----------------------- Dark/Night Mode ---------------- */}
                <li>
                  <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                      <DarkModeOutlinedIcon className="text-slate-900	" />
                    ) : (
                      <LightModeOutlinedIcon />
                    )}
                    <h1 className="text-slate-900 text-sm">Dark/Light</h1>
                  </IconButton>
                </li>
                {/*------------------------- Logout system ------------------ */}
                <li>
                  <Link
                    className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                    to="/"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <div
                      onClick={logOut}
                      to="/register"
                      className={({ isActive }) =>
                        isActive
                          ? "nav-link border-b-2 border-[#07847f] pb-1"
                          : "nav-link pb-1"
                      }
                    >
                      Logout
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </Box>
    </Box>
  );
};

export default Topbar;
