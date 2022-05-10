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
    title: "Flexible Mobile Service App",
    text: "Customize our mobile app to your unique business requirements    Our Ticketing Management Mobile Application can be customized to your business needs. Add forms and different field types in your app and this gives you greater flexibility in having your technicians in the field fill out the information you require for any job. Configure the interaction your technicians have and what additional data they may want to sync to the field service software. ",
  },
  {
    id: 2,
    title: "Complete Visibility And Control Of Daily Operations",
    text: ` Give your technicians insight into parts and inventory from their App. Along with an integrated CRM and ERP system, technicians can find the quantity of parts and inventory. Technicians can quickly add parts to work orders for full expense tracking and have prices on the invoice when completed.   `,
  },
  {
    id: 3,
    title: "Access Customer and Service History",
    text: "Give your technicians access to historical information through the Ticketing Management App. Technicians can access the customer’s previous work orders, equipment, contract information, and repair notes to help them through service appointments. Speed up repair times with detailed service history, allowing your technicians to access years of history from within the mobile app.    ",
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
    // "&::before": {
    //   position: "absolute",
    //   content: '""',
    //   top: 0,
    //   left: [0, null, null, null, null, 105, null, 250],
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: "center center",
    //   width: 215,
    //   height: 60,
    //   opacity: 0.3,
    //   "@media screen and (max-width:1220px)": {
    //     display: "none",
    //   },
    // },
    // "&:nth-of-type(2n-1)::before": {
    //   backgroundImage: `url(${ArrowOdd})`,
    // },
    // "&:nth-of-type(2n)::before": {
    //   backgroundImage: `url(${ArrowEven})`,
    //   top: 17,
    // },
    // "&:last-child::before": {
    //   display: "none",
    // },
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
