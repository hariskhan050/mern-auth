
import { Box, Typography, Stack } from "@mui/material";

const details = [
  {
    title: "Clarity: ",
    description:
      "Setting goals provides clarity on what you want to achieve in your life. When you have a clear idea of what you want to accomplish, its easier to stay focused and avoid distractions.",
  },
  {
    title: "Motivation: ",
    description:
      "Goals provide motivation by giving you a reason to work towards something. When you have a goal that is important to you, youre more likely to stay committed and put in the effort required to achieve it.",
  },
  {
    title: "Direction: ",
    description:
      "Goals provide direction by helping you to prioritize your time and resources. When you have a clear idea of what you want to achieve, you can create a plan of action to get there.",
  },

  {
    title: "Accountability: ",
    description:
      " Goals provide accountability by giving you something to measure your progress against. This can help you to stay on track and make adjustments as needed.",
  },
  {
    title: "Achievement: ",
    description:
      "Goals provide a sense of achievement when they are accomplished. Achieving goals can help to boost your self-confidence and provide a sense of satisfaction and fulfillment",
  }, {
    title: "Clarity: ",
    description:
      "Setting goals provides clarity on what you want to achieve in your life. When you have a clear idea of what you want to accomplish, its easier to stay focused and avoid distractions.",
  },
  {
    title: "Motivation: ",
    description:
      "Goals provide motivation by giving you a reason to work towards something. When you have a goal that is important to you, youre more likely to stay committed and put in the effort required to achieve it.",
  },

];

const Header = () => {
    return (
      
        <>
  
      <Box width={"65%"} margin="2em auto">
        <Typography variant="h4">Why setting goals is necessary ?</Typography>

        <Typography lineHeight={"1.8"}>
          Setting goals is important in life because it helps to provide
          direction, focus, and motivation. Goals give us something to strive
          towards and help us to organize our time and resources effectively.
          Here are some specific reasons why setting goals is necessary:
        </Typography>

        {details.map((text) => {
         return <Stack>
           <Typography sx={{color:'darkblue', fontWeight: 700}} lineHeight={'1.8'} >{text.title}</Typography>
            <Typography lineHeight={'1.8'}>{text.description}</Typography>
          </Stack>;
        })}
      </Box>
    </>
  );
};

export default Header;