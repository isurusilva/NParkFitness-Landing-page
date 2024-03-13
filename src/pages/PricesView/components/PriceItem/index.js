// @mui material components
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import PropTypes from "prop-types";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import MKTypography from "components/MKTypography";
import constants from "constants.js";

const useStyles = makeStyles(() => ({
  mainCard: {
    // backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 2px 14px 0 rgb(32 40 45 / 8%)",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "1500px",
      height: "610px",
      background: `linear-gradient(275.9deg,  #7b1fa2 -50.02%, rgba(145, 107, 216, 0) 180.58%)`,
      borderRadius: "250%",
      top: "-500px",
      right: "-500px",
    },
  },
  button: {
    color: "#7b1fa2",
    alignItems: "right",
    marginTop: 20,
    backgroundColor: "white",
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#7b1fa2",
      color: "white",
    },
  },
}));
function PriceItem({ subData }) {
  console.log(subData);
  const classes = useStyles();

  return (
    <MKBox
      className={classes.mainCard}
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
    >
      <Container>
        <MKTypography
          color="secondary"
          style={{
            textShadow: "0px 0px 5px #D0B7FF",
            textAlign: "center",
            marginTop: "-30px",
            marginBottom: "0px",
          }}
          gutterBottom
          variant="h3"
        >
          {subData.type}
        </MKTypography>
        <MKTypography variant="h5" fontSize="14px" textAlign="center">
          {subData.description}
        </MKTypography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <MKTypography variant="h5" fontSize="25px" textAlign="center">
            {subData.amount}
          </MKTypography>
          <MKTypography variant="h5" fontSize="18px" textAlign="center">
            &nbsp;LKR
          </MKTypography>
        </div>
        <MKTypography variant="h5" fontSize="14px" textAlign="center" marginBottom="20px">
          per year
        </MKTypography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            href={constants.baseUrl}
          >
            Get Start
          </Button>
        </div>
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div style={{ display: "flex" }}>
            <DoneIcon style={{ color: "green", marginTop: "-2px", marginRight: "10px" }} />
            <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
              This plan can create upto {subData.gymCount} gym brands.
            </MKTypography>
          </div>
          <div style={{ display: "flex" }}>
            <DoneIcon style={{ color: "green", marginTop: "-2px", marginRight: "10px" }} />
            <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
              This plan can create upto {subData.branchCount} branches in single gym brand.
            </MKTypography>
          </div>
          <div style={{ display: "flex" }}>
            {subData.isCalAvailable ? (
              <>
                <DoneIcon style={{ color: "green", marginTop: "-2px", marginRight: "10px" }} />
                <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
                  This plan provide Calorie Calculator for its all users.
                </MKTypography>
              </>
            ) : (
              <>
                <CloseIcon style={{ color: "red", marginTop: "-2px", marginRight: "10px" }} />
                <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
                  This plan does not provide Calorie Calculator for its users.
                </MKTypography>
              </>
            )}
          </div>
          <div style={{ display: "flex" }}>
            {subData.isDietAvailable ? (
              <>
                <DoneIcon style={{ color: "green", marginTop: "-2px", marginRight: "10px" }} />
                <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
                  This plan allow trainers to provide Diet Plans for all gym customers.
                </MKTypography>
              </>
            ) : (
              <>
                <CloseIcon style={{ color: "red", marginTop: "-2px", marginRight: "10px" }} />
                <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
                  This plan does not allow trainers to provide Diet Plans for gym customers.
                </MKTypography>
              </>
            )}
          </div>
          <div style={{ display: "flex" }}>
            {subData.isDietAvailable ? (
              <>
                <DoneIcon style={{ color: "green", marginTop: "-2px", marginRight: "10px" }} />
                <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
                  This plan provide weight prediction feature to all trainers.
                </MKTypography>
              </>
            ) : (
              <>
                <CloseIcon style={{ color: "red", marginTop: "-2px", marginRight: "10px" }} />
                <MKTypography variant="h5" fontSize="14px" textAlign="left" marginBottom="20px">
                  This plan does not provide weight prediction feature to all trainers.
                </MKTypography>
              </>
            )}
          </div>
        </div>
      </Container>
    </MKBox>
  );
}

PriceItem.propTypes = {
  subData: PropTypes.string.isRequired,
};

export default PriceItem;
