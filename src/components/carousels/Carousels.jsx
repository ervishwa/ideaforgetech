import Carousel from 'react-bootstrap/Carousel';

export function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ideaforgetech.com/_nuxt/img/Performance.7c3e9f2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ideaforgetech.com/_nuxt/img/Reliability.bf9c4a7.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ideaforgetech.com/_nuxt/img/Autonomy.ac773f5.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
