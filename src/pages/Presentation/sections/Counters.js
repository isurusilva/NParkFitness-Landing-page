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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import HttpCommon from "http-common";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  const [countData, setCountData] = React.useState(null);
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
      setCountData(response.data.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              color="secondary"
              count={totCount}
              suffix="+"
              title="Users"
              description="The users that registered in NPark Platform."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              color="secondary"
              count={countData !== null ? countData.branch : 0}
              suffix="+"
              title="Gym Branches"
              description="The branchs that registered in this platform are spread all over the country."
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              color="secondary"
              count={countData !== null ? countData.user[1].count : 0}
              suffix="+"
              title="Owners"
              description="Currently this much owners registered in this platform."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
