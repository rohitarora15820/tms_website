/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Smart from "assets/feature/smart.svg";
import Winner from "assets/feature/winner.svg";
import Cloud from "assets/feature/cloud.svg";
import Setting from "assets/feature/setting.svg";
import Design from "assets/feature/design.svg";
import Chat from "assets/feature/chat.svg";

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: "Service Scheduling",
    title: "Service Scheduling",

    text: "Our app ensures that your technicians are in the right place, at the right time, with the right parts.",
  },

  {
    id: 2,
    imgSrc: Cloud,
    altText: "Location and navigation data",
    title: "Location and navigation data",
    text: "Providing location and navigation data within the app helps field technicians save a considerable amount of time and reduces customer’s hassle ",
  },
  {
    id: 3,
    imgSrc: Setting,
    altText: "Analytics & Reporting",
    title: "Analytics & Reporting",
    text: "Quickly generate customized technician, customer, equipment, and service contract reports. ",
  },
  {
    id: 4,
    imgSrc: Design,
    altText: "Scheduling & Dispatching",
    title: "Scheduling & Dispatching",
    text: "Technicians can manage Call status updates, notes, files, photos, and more — from wherever their day takes them.",
  },
  {
    id: 5,
    imgSrc: Chat,
    altText: "Track time spent at each appointment",
    title: "Track time spent at each appointment",
    text: "Time tracking system in the app provides complete transparency into the billing process. Using this data, you can also optimize your business operations by analyzing the time taken to resolve different kinds of tasks.",
  },
  {
    id: 6,
    imgSrc: Winner,
    altText: "Engage with Customers",
    title: "Engage with Customers",
    text: "Technicians have the option to call, text or whatsapp the customer immediately and streamline their communications in a way that never leaves customers in the dark.  ",
  },
];

export default function Feature() {
  return (
    <section id="features" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Exciting features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
