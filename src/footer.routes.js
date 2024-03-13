// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/NFIcon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "NParkFitness",
    image: logoCT,
    route: "/",
  },
  socials: [
    // {
    //   icon: <FacebookIcon />,
    //   link: "https://www.facebook.com/CreativeTim/",
    // },
    // {
    //   icon: <TwitterIcon />,
    //   link: "https://twitter.com/creativetim",
    // },
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: " ",
      items: [
        { name: " ", href: " " },
        { name: " ", href: " " },
        { name: " ", href: " " },
      ],
    },
    {
      name: " ",
      items: [
        { name: " ", href: " " },
        { name: " ", href: " " },
        { name: " ", href: " " },
      ],
    },
    {
      name: "company",
      items: [
        { name: "about us", href: " " },
        { name: "blog", href: " " },
      ],
    },
    // {
    //   name: "resources",
    //   items: [
    //     { name: "illustrations", href: "https://iradesign.io/" },
    //     { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
    //     { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
    //   ],
    // },
    // {
    //   name: "help & support",
    //   items: [
    //     { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
    //     { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
    //     { name: "custom development", href: "https://services.creative-tim.com/" },
    //     { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
    //   ],
    // },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: " " },
        { name: "privacy policy", href: " " },
        { name: "licenses (EULA)", href: " " },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} NParkFitness by NParkSolutions.
    </MKTypography>
  ),
};
