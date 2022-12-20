import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styles from "./Carousel.module.css";
import type { CarouselProps } from "./Carousel.types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel(props: CarouselProps) {
  const { children } = props;

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
      >
        {children}
      </Swiper>
    </div>
  );
}
