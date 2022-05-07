/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Flex,
  Button,
  Heading,
  Text,
} from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import PaymentThumb from "assets/paymentThumb.png";
import PaymentPattern from "assets/payment-pattern.png";
const heading = {
  heading: "Contact Us",
};
const data = {
  subTitle: "",
  title: "Contact ",
  description: "+91 - 9871965334",
  // btnName: "Learn More",
  // btnURL: "#",
};
const data2 = {
  // subTitle: "",
  title: "Based in",
  contents: (
    <div>
      G11-12,SRS TOWER<br></br>
      Sector 31<br></br>
      Faridabad<br></br>
      Haryana (121003)
    </div>
  ),
};
const data3 = {
  title: "Get in Touch",
};
// const data = {
//   subTitle: "",
//   title: "Explore our standard App for free:",
//   description:
//     "Discover how Extension Technologies can help you sell better. Find out how you can control your operations from one centralised platform with Extension’s OMS app. Download and view our demo application in the playstore for free! ",
//   btnName: "Learn More",
//   btnURL: "#",
// };
// const data2 = {
//   subTitle: "",
//   title: "Want a customised demo for app?",
//   description:
//     "Get a personalised solution and see for yourself what we’re all about",
//   btnName: "Learn More",
//   btnURL: "#",
// };

export default function Dilog() {
  return (
    <section sx={{ variant: "section.securePayment" }}>
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox2}>
        <Container sx={styles.containerBox}>
          <Heading sx={styles.title}>Contact Us</Heading>
          <Box sx={styles.contentBox}>
            <Heading sx={styles.contentBox.title}>{data.title}</Heading>
            <Text sx={styles.contentBox.desc}>{data.description}</Text>
            {/* <Image src={PaymentThumb} alt={data.title} /> */}
            {/* <TextFeature */}
            {/* // subTitle={data.subTitle}
              // title={data.title}
              description={data.description}
              // btnName={data.btnName}
              // btnURL={data.btnURL}
            /> */}
          </Box>
          <Box sx={styles.contentBox}>
            <Heading sx={styles.contentBox.title}>{data2.title}</Heading>
            <Text sx={styles.contentBox.desc}>{data2.contents}</Text>
            {/* // subTitle={data2.subTitle}
              // title={data2.title}
             
              // btnNam={data2.btnName}
              // btnURL={data2.btnURL} */}
          </Box>
        </Container>

        <Container sx={styles.containerBox3}>
          <TextFeature
            // subTitle={data2.subTitle}
            title={data3.title}
            // description={data2.contents}
            // btnNam={data2.btnName}
            // btnURL={data2.btnURL}
          />
          <Box as="form" onSubmit={(e) => e.preventDefault()}>
            {/* <Label htmlFor="username">Username</Label> */}
            <Input
              name="name"
              id="name"
              // label="Full Name"
              placeholder="Full Name"
              mb={3}
            />
            {/* <Label htmlFor="password">Password</Label> */}
            <Input name="email" id="email" placeholder="Email" mb={3} />
            <Input
              name="mobile"
              id="mobile"
              placeholder="Mobile Number"
              mb={3}
            />
            <Input
              name="organization"
              id="organization"
              placeholder="Organization Name"
              mb={3}
            />
            {/* <Box>
            <Label mb={3}>
            <Checkbox />
            Remember me
            </Label>
          </Box> */}
            {/* <Label htmlFor="sound">Sound</Label> */}
            <Select
              name="source"
              id="source"
              placeholder="Select Source"
              mb={3}
            >
              <option value="" disabled selected hidden>
                Select Source
              </option>
              <option>Beep</option>
              <option>Boop</option>
              <option>Blip</option>
            </Select>
            <Select
              name="designation"
              id="designation"
              defautValue="Boop"
              mb={3}
            >
              <option value="" disabled selected hidden>
                Select Designation
              </option>
              <option>Beep</option>
              <option>Boop</option>
              <option>Blip</option>
            </Select>
            {/* <Label htmlFor="comment">Comment</Label> */}
            {/* <Textarea name="comment" id="comment" rows={6} mb={3} /> */}
            {/* <Flex mb={3}>
            <Label>
            <Radio name="letter" /> Alpha
            </Label>
            <Label>
            <Radio name="letter" /> Bravo
            </Label>
            <Label>
            <Radio name="letter" /> Charlie
            </Label>
          </Flex> */}
            {/* <Label>Slider</Label> */}
            {/* <Slider mb={3} /> */}
            {/* <button onClick={closeModal}>close</button> */}
            <Button sx={styles.save}>Save</Button>
          </Box>
        </Container>
      </Container>
    </section>
  );
}

const styles = {
  bgOverlay: {
    display: "flex",
    backgroundColor: "red",
    // position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    zIndex: -1,
    width: [
      "100%",
      null,
      null,
      "calc(50% + 400px)",
      "calc(50% + 480px)",
      "calc(50% + 570px)",
      null,
      "calc(50% + 625px)",
    ],
    backgroundImage: `url(${PaymentPattern})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
  },
  containerBox2: {
    display: "flex",
    borderRadius: "15px",
    backgroundColor: "#1F3E76",
    "@media screen and (max-width:1220px)": {
      display: "block",
      //   p: "1000px",
      //   pb: "30px",
    },
    p: "20px",
    // alignItems: "flex-start",
    // justifyContent: "space-between",
    // flexWrap: ["wrap", null, null, "nowrap"],
  },
  save: {
    // alignItems: "center",
    // justifyContent: "cen0ter",
    // position: "absolute",
    // bottom: "10%",
    // left: "50%",
  },
  containerBox3: {
    // display: "flex",
    m: "30px",
    backgroundColor: "white",
    borderRadius: "15px",
    alignItems: "center",
    p: "20px",
    "@media screen and (max-width:1220px)": {
      m: "0px",
      //   fontSize: "20px",
    },

    // alignItems: "flex-start",
    justifyContent: "center",
    // flexWrap: ["wrap", null, null, "nowrap"],
  },

  contentBox: {
    // backgroundColor: "black",
    // color: "white",
    p: "10px",
    title: {
      color: "white",
      fontSize: "45px",
      "@media screen and (max-width:1220px)": {
        fontSize: "20px",
        // fontSize:""
        // m: "30px",
      },
    },
    desc: {
      color: "white",
      "@media screen and (max-width:1220px)": {
        fontSize: "10px",
        // fontSize:""
        // m: "30px",
      },
    },
  },
  title: {
    color: "white",
    fontSize: "65px",
    "@media screen and (max-width:1220px)": {
      display: "none",
      // fontSize:""
      // m: "30px",
    },
  },
  containerBox: {
    p: "20px",
    "@media screen and (max-width:1220px)": {
      fontSize: "15px",
      display: "flex",
      justifyContent: "space-between",
      // fontSize:""
      // m: "30px",
    },
  },
  // thumbnail: {
  //   mb: -2,
  //   ml: [-4, "-40px", null, null, 0],
  //   order: [2, null, null, 0],
  //   pr: [6, null, 7, 0],
  // },
  // contentBox: {
  //   width: ["100%", 420, 480, 380, 500, 570],
  //   mx: "auto",
  //   flexShrink: 0,
  //   textAlign: ["center", null, null, "left"],
  //   pt: [0, null, null, 4, "50px", null, 4, "80px"],
  //   pl: [0, null, null, 40, "90px"],
  //   pb: [7, null, null, 9],
  //   pr: [0, null, null, null, null, 6],
  // },
};
