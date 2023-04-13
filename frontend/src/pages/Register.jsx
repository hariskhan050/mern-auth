import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Box, Typography, Stack, Input, Button } from "@mui/material";
import { StyledInput } from "./Login";
import { register, reset } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const { name, email, password, confirmPass } = formData;

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
      // navigate("/");
      

      toast.success("User have been registered")
    }
    dispatch(reset());
   }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <Box margin={"2em 0"} align={"center"}>
      <Typography variant="h3">Register</Typography>
      <Typography variant="h5">Please create an account </Typography>
      <form onSubmit={handleSubmit}>
        <Stack width={"400px"}>
          <StyledInput
            onChange={handleChange}
            value={name}
            name="name"
            type="text"
            placeholder="Name"
          />
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
          <StyledInput
            onChange={handleChange}
            value={confirmPass}
            name="confirmPass"
            type="password"
            placeholder="Confirm Password"
          />
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Register;
