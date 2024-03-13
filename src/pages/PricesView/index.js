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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
// import View from "layouts/sections/components/View";
import React, { useEffect } from "react";
import HttpCommon from "http-common";
import { Grid } from "@mui/material";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import routes from "routes";

// Buttons page components
import PriceItem from "./components/PriceItem";

function PriceView() {
  const [subTypeData, setSubTypeData] = React.useState([]);
  const [isDataLoading, setDataLoading] = React.useState(true);
  function getSubData() {
    // let arr = [];
    HttpCommon.get(`/auth/getAllSubscriptionTypes/`).then((response) => {
      console.log(response.data.data);

      setSubTypeData(response.data.data);
      setDataLoading(false);
      console.log(subTypeData);
      console.log(isDataLoading);
    });
  }

  useEffect(async () => {
    setDataLoading(true);
    getSubData();
  }, []);
  return (
    <>
      {/* <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Sign In",
          color: "secondary",
        }}
        sticky
        dark
      /> */}
      <BaseLayout title="Prices" breadcrumb={[{ label: "NParkFitness" }, { label: "Prices" }]}>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          {subTypeData.map((element) => (
            <Grid item xs={12} md={6} lg={4}>
              <PriceItem subData={element} />
            </Grid>
          ))}
        </Grid>
      </BaseLayout>
    </>
  );
}

export default PriceView;
