import { useState, useEffect } from "react";
import { Box, Typography, Stack, Input, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

export const StyledInput = styled(Input)({
  border: "2px solid skyblue",
  padding: ".3em",
  margin: "1em 0",
  borderRadius: "4px",
});

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
      

      // toast.success("User have been registered")
    }
    dispatch(reset());
   }, [user, isError, isSuccess, message, navigate, dispatch]);

  
  
  
  
   if (isLoading) {
    return <h1>Loading...</h1>
  }


  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    }

    dispatch(login(userData))


  };

  return (
    <Box margin={"2em 0"} align={"center"}>
      <Typography variant="h3">Login</Typography>
      <Typography variant="h5">Please login to set goals</Typography>
      <form onSubmit={handleSubmit}>
        <Stack width={"400px"}>
          <StyledInput
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            placeholder="Email"
          />
          <StyledInput
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
