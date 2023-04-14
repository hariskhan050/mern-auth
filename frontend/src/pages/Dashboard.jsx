import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Header from "../components/Header";
// import Spinner from '../components/Spinner'
import { getGoals, reset } from "../features/goals/goalSlice";
import { Stack, Box, Typography, CircularProgress } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <CircularProgress sx={{color:'blue', position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',}} />
  }

  return (
    <Stack justifyContent={'space-around'} direction={{xs:'column', sm:'row'}}>
      <Box margin={"2em .2em"} align="center">
        {user ? (
          <>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Welcome {user && user.name}
            </Typography>
            <Typography>Goals Dashboard</Typography>

            <GoalForm />
          </>
        ) : (
          <Header />
        )}
      </Box>

      <Box sx={{overflowY:{md:'scroll'}}} height={{xs:'auto', sm:'80vh'}}  my={'2em'}>
        <Typography sx={{fontWeight:700}} variant="h5" align='center'>Goals list to Accomplish</Typography>
        {goals.length > 0 ? (
          <>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </Box>
    </Stack>
  );
};

export default Dashboard;
