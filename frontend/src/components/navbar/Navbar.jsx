import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../../features/auth/authSlice";
import { Login as LoginIcon, Person, Logout as LogoutIcon } from "@mui/icons-material";
import { Stack, Box, Typography, Button } from "@mui/material";

const Navbar = () => {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);


  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    
  }
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={{ backgroundColor: "aliceblue", padding: "1.5em .5em" }}
        direction={"row"}
      >
        <Link to="/">
          <Box>
            <Typography sx={{ fontWeight: 700 }} variant="h6">
              Achieve by Setting Goals
              <EmojiEventsIcon />
            </Typography>
          </Box>
        </Link>
        {user ? (
          <Button onClick={handleLogout} endIcon={<LogoutIcon />} variant="contained">
            Logout
          </Button>
        ) : (
          <Box>
            <Link to="/register">
              <Button
                startIcon={<Person />}
                sx={{ mr: "1em" }}
                variant="outlined"
              >
                Signup
              </Button>
            </Link>

            <Link to="/login">
              <Button startIcon={<LoginIcon />} variant="contained">
                Login
              </Button>
            </Link>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default Navbar;
