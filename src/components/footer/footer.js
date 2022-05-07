/** @jsx jsx */
import { jsx, Heading, Box, Container, Text } from "theme-ui";
import { Link } from "components/link";
import menuItems from "./footer.data";
import PatternBG from "assets/patternBG.png";
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <nav>
                <Heading sx={styles.footer.heading}>{header}</Heading>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))}
        </Box>
      </Container>
      <Text sx={styles.footer.copyright}>
        All right reserved - Design & Developed by
        <Link path="https://extensionerp.com/" target="_blank">
          Extension Technologies Pvt. Ltd.
        </Link>
      </Text>
    </footer>
  );
}

const styles = {
  footer: {
    container: {
      // display: "flex",
      // justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      // backgroundColor: "yellow",

      // ml: "22%",
    },
    footerTopArea: {
      // borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      // justifyContent: "space-between",
      // alignItems: "center",
      // backgroundColor: "red",
      width: "100%",
      flexWrap: "wrap",

      // pt: [7, null, 8],
      // p: "200px",
      // pb: ["10px", null, null, "20px"],

      // px: [0, null, null, null, 4],
    },
    menus: {
      width: "25%",
      display: "flex",
      flexDirection: "column",
      // backgroundColor: "green",
      // backgroundColor:
      alignItems: "center",

      // justifyContent: "",
      // m: "5px",
    },

    heading: {
      fontSize: 3,
      color: "text_secondary",
      fontWeight: "500",
      mb: "10px",
      lineHeight: "1.35",
      "@media screen and (max-width:1220px)": {
        // display: "block",
        fontSize: "12px",
        // mt: "50px",
      },

      // backgroundColor: "yellow",
    },

    link: {
      fontSize: ["14px", null, 1],
      "@media screen and (max-width:1220px)": {
        fontSize: "10px",
        lineHeight: 1,
        mb: 1,
        // p: 2,
        // display: "block",
        // mt: "50px",
      },
      color: "text",
      fontWeight: "body",
      cursor: "pointer",
      // backgroundColor: "red",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      ":hover": {
        color: "primary",
      },
      ":last-child": {
        mb: "0px",
      },
    },
    copyright: {
      backgroundColor: "primary",
      backgroundImage: `url(${PatternBG})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      position: "relative",
      mt: "50px",
      fontSize: ["14px", null, 1],
      width: "100%",
      textAlign: "center",
      p: ["20px 20px"],

      color: "white",
      a: {
        textDecoration: "none",
        color: "inherit",
        pl: 1,
        transition: "all 0.25s",
        "&:hover": {
          color: "primary",
        },
      },
    },
  },
};
