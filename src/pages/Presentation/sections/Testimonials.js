/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import HttpCommon from "http-common";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
// import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
// import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
// import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
// import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  const [reviewData, setReviewData] = React.useState(null);
  const [totCount, setTotCount] = React.useState(0);

  function getData() {
    // let arr = [];
    HttpCommon.get(`/auth/getPlatformCounts/`).then((response) => {
      console.log(response.data.data);
      let temp = 0;
      response.data.data.user.map((element) => {
        temp += element.count;
        return 0;
      });
      setTotCount(temp);
      HttpCommon.get(`/auth/getAllReview`).then((response2) => {
        console.log(response2.data.data);
        setReviewData(response2.data.data);
      });
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="secondary" textGradient mb={2}>
            {totCount}+ Owners and Trainers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many training centers, medical facilities and gyms trust this platform.
          </MKTypography>
        </Grid>
        {reviewData !== null && reviewData.length > 2 ? (
          <Grid container spacing={3} sx={{ mt: 8 }}>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name={reviewData[0].name}
                date="2 day ago"
                review={reviewData[0].comment}
                rating={reviewData[0].rating}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                color="secondary"
                name={reviewData[1].name}
                date="1 day ago"
                review={reviewData[1].comment}
                rating={reviewData[1].rating}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name={reviewData[2].name}
                date="1 week ago"
                review={reviewData[2].comment}
                rating={reviewData[2].rating}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3} sx={{ mt: 8 }}>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name="Saman Perera"
                date="2 day ago"
                review="This is an excellent platform, this help me to grow my business in covid-19 lockdowns."
                rating={4}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                color="secondary"
                name="Kamal Silva"
                date="1 week ago"
                review="I found NParkFitness when my bussiness in downside. This help my business to grow. I am very greateful to you all !!!"
                rating={5}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DefaultReviewCard
                name="Nimal Weerasiri"
                date="3 weeks ago"
                review="Great product. I love Calorie Calculator and Weight prediction features."
                rating={5}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </MKBox>
  );
}

export default Information;
