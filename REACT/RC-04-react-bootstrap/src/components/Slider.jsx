import Carousel from "react-bootstrap/Carousel";
import slider1 from "../img/slider01.jpg";
import slider2 from "../img/slider02.jpg";
import slider3 from "../img/slider03.jpg";

const Slider = () => {
  return (
    <Carousel className="mb-5">
      <Carousel.Item>
        <img src={slider1} alt="" width="1500px" height="500px" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider2} alt="" width="1500px" height="500px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} alt="" width="1500px" height="500px" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
