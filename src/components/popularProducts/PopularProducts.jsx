import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';
import styles from './PopularProducts.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getPopularProducts } from '../../utils/filter';
import getImage from '../../utils/getImage';

const PopularProducts = () => {
    const popularProducts = getPopularProducts();

    return ( 
        <section className={styles.section}> 
            <h3>Popular Now</h3>      
            <Swiper
                modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
                centeredSlides={true}
                initialSlide={2}
                speed={600}
                navigation={true}
                effect="coverflow"
                spaceBetween={30}
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 80, depth: 180, modifier: 1, slideShadows: true }}
                pagination={{ clickable: true }}
                loop={true} 
                autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            }}          
            >         
                {popularProducts.map((product) => {
                    return (
                        <SwiperSlide key={product.id} >
                            <div className={styles.imageWrapper}>                        
                                <img src={getImage(product.id)}/> 
                            </div>
                            <div className={styles.productInfo}>                               
                                <div className={styles.productName}>{product.name}</div>
                                <div className={styles.productBrand}>{product.brand}</div>
                                <div className={styles.productPrice}>€{product.price}</div>
                            </div>                                          
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </section>  
    )
    
};

export default PopularProducts;