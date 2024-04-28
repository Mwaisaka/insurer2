import React from "react";
import Carousel from "../Carousel/Carousel";
import Grid from "../Home/Grid";
import Card from "../Home/Card";
import Testimonials from "./Testimonials";
import Image1 from "../Images/1.png";
import Image2 from "../Images/2.png";
import Image3 from "../Images/3.png";
import Image4 from "../Images/4.png";
import { Link } from "react-router-dom";


export default function Home() {
  let slides = [
    {
      image: Image1,
      content:
        "We do the searching. You do the saving. Your one-stop shop for insurance comparison.",
    },
    {
      image: Image4,
      content:
        "We do the searching. You do the saving. Your one-stop shop for insurance comparison.",
    },
    {
      image: Image2,
      content:
        "We do the searching. You do the saving. Your one-stop shop for insurance comparison.",
    },
    {
      image: Image3,
      content:
        "We do the searching. You do the saving. Your one-stop shop for insurance comparison.",
    },
  ];

  

  return (
    <div className="w-[80%] m-auto pt-2">
      <Carousel slides={slides} />
      <p style={{"fontSize":20}}>
        <Link to="/user-registration">Click here to sign up...</Link>
      </p>
      <Card />
      <div className="w-[100%] m-auto pt-0 py-0">
        <Grid />
        <Testimonials />
      </div>
    </div>
  );
}
