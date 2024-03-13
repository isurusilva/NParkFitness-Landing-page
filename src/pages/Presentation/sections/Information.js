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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import constants from "constants.js";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                color="secondary"
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Features
                  </>
                }
                description="There are many features in NPark Fitness. Join us and feel it."
              />
              <RotatingCardBack
                color="secondary"
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time and money. Hurry up and join us."
                action={{
                  type: "external",
                  route: `${constants.baseUrl}`,
                  label: "Join",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="info"
                  icon={<ContentCopyIcon color="primary" fontSize="large" />}
                  title="Schedule Managment"
                  description="Create workout plans according to the need of the customers with time routines. Able to select workout activities that are available in your branch. Quickly view customers’ training progress with exercise and workout history."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="error"
                  icon="restaurant"
                  title="Diet Plan"
                  description="Make diet plans according to the goals that customers want to achieve. Customer can get their diet plans through the mobile application. "
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="success"
                  icon="price_change"
                  title="Online Payment"
                  description="The customers can pay their gym payments online quickly and can easily handle payments in a systemic way."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="secondary"
                  icon="devices"
                  title="Attendance"
                  description="Track the attendance accurately using a QR code and manage the customers' attendance details regularly. "
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="error"
                  icon="devices"
                  title="Weight Prediction"
                  description="Monitor and analyze the current weight changes and give future weight predictions according to the workout schedules and diet plans."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  color="warning"
                  icon="devices"
                  title="Devices"
                  description="Web site for gym management and mobile application is for customers. Create a good connection between the gym and customers and keep your customer engaged and motivated with encouragement."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
