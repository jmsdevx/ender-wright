import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Iframe from 'react-iframe'

export default function Dropdown(props) {
  return(
    <Carousel>
      <Iframe url="https://www.youtube.com/embed/jha3bA19-zg"
        width="350px"
        height="350px"
        id="price"
        display="initial"
        position="relative"
      />
      <Iframe url="https://www.youtube.com/embed/9hEpTA8ubcw"
        width="350px"
        height="350px"
        id="price"
        display="initial"
        position="relative"
      />
      <Iframe url="https://www.youtube.com/embed/zkPYMIFU92g"
        width="350px"
        height="350px"
        id="price"
        display="initial"
        position="relative"
      />
      <Iframe url="https://www.youtube.com/embed/ihMqSNhz2MI"
        width="350px"
        height="350px"
        id="price"
        display="initial"
        position="relative"
      />
      <Iframe url="https://www.youtube.com/embed/h4l47MhF2nc"
        width="350px"
        height="350px"
        id="price"
        display="initial"
        position="relative"
      />
    </Carousel>
  )
}
