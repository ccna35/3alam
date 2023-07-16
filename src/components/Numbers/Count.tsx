import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import GradientText from "../GradientText";
import useStyles from "./styles";

const Count = ({ end, duration, text }: any) => {
  const classes = useStyles();
  return (
    <CountUp
      start={0}
      end={end}
      duration={duration}
      scrollSpyOnce
      formattingFn={(value) => `${value}`}
    >
      {({ countUpRef }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={classes.counter}
            className="bold"
            color="primary"
            ref={countUpRef}
          />
          <GradientText sx={classes.plus}>+</GradientText>
          <Typography sx={classes.textCounter} color="primary">
            {text}
          </Typography>
        </Box>
      )}
    </CountUp>
  );
};

export default Count;
