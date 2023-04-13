import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { StyledInput } from "../pages/Login";
import { Button, Stack, Box } from "@mui/material";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Stack
          justifyContent={"center"}
          direction={"row"}
          alignItems={"center"}
        >
          <StyledInput
            placeholder="Please enter your goal..."
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit" variant="contained" sx={{ py: ".7em", mx: "1em" }}>
            Set Goal
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default GoalForm;
