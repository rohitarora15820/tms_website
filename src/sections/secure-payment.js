/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import { useState } from "react";
import PaymentThumb from "assets/paymentThumb.png";
import PaymentPattern from "assets/payment-pattern.png";
import Dilog from "./dilog";
// import Modal from "./Modal";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "red",
    "@media screen and (max-width:1220px)": {
      fontSize: "25px",
      // fontSize:""
      // p: "800px",
      // margin: "80px",
      backgroundColor: "red",
    },
  },
};
const data = {
  subTitle: "",
  title: "Explore our standard App for free:",
  description:
    "Discover how Extension Technologies can help you sell better. Find out how you can control your operations from one centralised platform with Extension’s OMS app. Download and view our demo application in the playstore for free! ",
  btnName: "Learn More",
  btnURL: "#",
};
const data2 = {
  subTitle: "",
  title: "Want a customised demo for app?",
  description:
    "Get a personalised solution and see for yourself what we’re all about",
  btnName: "Learn More",
  btnURL: "#",
};

export default function SecurePayment() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const [showModal, setShowModal] = useState(false);
  return (
    <section sx={{ variant: "section.securePayment" }}>
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          {/* <Image src={PaymentThumb} alt={data.title} /> */}
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            // btnName={data.btnName}
            // btnURL={data.btnURL}
          />
          <button onClick={openModal} sx={styles.btn}>
            Learn More
          </button>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles.content}
            contentLabel="Example Modal"
          >
            {/* <button onClick={closeModal}>close</button> */}

            <Dilog />
          </Modal>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data2.subTitle}
            title={data2.title}
            description={data2.description}
            // btnName={data2.btnName}
            // btnURL={data2.btnURL}
          />
          <button onClick={openModal} sx={styles.btn}>
            Learn More
          </button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  btn: {
    backgroundColor: "primary",
    color: "white",
    fontSize: "18px",
    borderRadius: "35px",
    p: "10px",
  },
  bgOverlay: {
    position: "absolute",
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
  containerBox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    "@media screen and (max-width:1220px)": {
      display: "block",
      p: "10px",
    },
    // flexWrap: ["wrap", null, null, "nowrap"],
  },
  thumbnail: {
    mb: -2,
    ml: [-4, "-40px", null, null, 0],
    order: [2, null, null, 0],
    pr: [6, null, 7, 0],
  },
  contentBox: {
    width: ["100%", 420, 480, 380, 500, 570],
    mx: "auto",
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    pt: [0, null, null, 4, "50px", null, 4, "80px"],
    pl: [0, null, null, 40, "90px"],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
};
