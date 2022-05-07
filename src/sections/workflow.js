/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.png";
import ArrowEven from "assets/arrowEven.png";

const data = [
  {
    id: 1,
    title: "Remove manual constrictions",
    text: "Bring all of your orders in one location to process them from start to finish and cut down upon manual and human mistakes",
  },
  {
    id: 2,
    title: "Supports your company’s growth",
    text: ` Increased competition in today's market means that you need to choose tools that can constantly adapt to the growth of your company. Our Order Management System is a flexible tool that will go hand in hand with your growth.`,
  },
  {
    id: 3,
    title: "Increases customer satisfaction",
    text: "Ensures a business’s workflow runs smoothly by establishing efficient processes to keep it moving forward thus maintaining customer satisfaction and protecting a company’s reputation. Keep customers informed with email updates once orders have been dispatched.",
  },
];

export default function WorkFlow() {
  return (
    <section id="benefits" sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Specifically designed for growing businesses"
          title="How will Extension technologies OMS app benefit you?"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      background:
        "linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)",
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    // marginLeft: "25%",
    // m: "5%",
    mb: -1,
    pt: 0,
    justifyContent: "space-between",
    gridGap: "50px",
    // backgroundColor: "black",
    gridTemplateColumns: ["repeat(1,25%)", "repeat(2,25%)", "repeat(3,25%)"],
    overflow: "hidden",
    "@media screen and (max-width:1220px)": {
      display: "block",
      // mt: "50px",
    },
  },
  card: {
    display: "flex",
    // flexWrap: "none",
    flexDirection: "column",
    "@media screen and (max-width:1220px)": {
      // display: "block",
      mt: "50px",
    },
    // backgroundColor: "yellow",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: "100%",
    mx: "auto",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 105, null, 250],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      opacity: 0.3,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.65,
      // pr: [0, null, null, null, null, 5],
    },
  },
};
