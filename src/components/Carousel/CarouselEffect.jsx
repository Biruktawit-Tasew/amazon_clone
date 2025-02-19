import styles from './carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img from "./images/data";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((images,i) => (
          <img key={i} src={images} />
        ))}
      </Carousel>
      <div className={styles.imgBottom}/>
    </div>
  );
};

export default CarouselEffect;
