import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Header from "../components/Header";
// import Spinner from '../components/Spinner'
import { getGoals, reset } from "../features/goals/goalSlice";
import { Box, Typography } from "@mui/material";

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
    return <h3>Loading...</h3>;
  }

  return (
    <Box align="center">
      {user ? (
        <>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Welcome {user && user.name}
          </Typography>
          <Typography>Goals Dashboard</Typography>

          <GoalForm />

          <section className="content">
            {goals.length > 0 ? (
              <>
                {goals.map((goal) => (
                  <GoalItem key={goal._id} goal={goal} />
                  ))}
                  </>
           
            ) : (
              <h3>You have not set any goals</h3>
            )}
          </section>
        </>
      ) : (
        <Header />
      )}
    </Box>
  );
};

export default Dashboard;
