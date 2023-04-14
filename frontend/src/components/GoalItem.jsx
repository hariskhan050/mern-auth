import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { Box, Typography, Button, Stack } from "@mui/material";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <>
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        width={{xs:'315px', lg:'96%'} }
        margin={'auto'}
        sx={{padding:'1em', my:'1em', borderRadius:'1em',bgcolor:'lightblue', textTransform:"capitalize", border:'2px solid skyblue'}}
        
      >
        {/* <Stack direction="row" alignItems={"center"}> */}
          <Typography variant="h6" sx={{ fontWeight: 500, fontSize:{xs:'.9em', md:'unset'} }}>
            {goal.text}
          </Typography>
        <Button
          sx={{bgcolor:'red',px:'0', color:'white',width:'fit-content', borderRadius:"10px" }}
            onClick={() => dispatch(deleteGoal(goal._id))}
            className="close"
          >
            X
          </Button>
        {/* </Stack> */}
        {/* <Typography>
          {new Date(goal.createdAt).toLocaleString("en-US")}
        </Typography> */}
      </Stack>
    </>
  );
}

export default GoalItem;
