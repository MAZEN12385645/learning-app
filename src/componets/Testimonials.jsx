import { RiArrowLeftLine } from "@remixicon/react"
import { RiArrowRightLine } from "@remixicon/react"
import { testimonialsItems } from "../constant/data"
import { Swiper,SwiperSlide } from "swiper/react"
import { motion } from "motion/react";
import * as variants from "../motion/animation"
import "Swiper/css";
import Title from "./Title"
import { Navigation , Autoplay } from "swiper/modules";
const Testimonials = () => {

    return(
       <section className="section">
        <motion.div className="container"
            variants={variants.staggerContainer} 
            whileInView="show" 
            initial="hidden" 
         >
            {/*title */}
            <Title title="Our Testimonials"
             text="Lorem ipsum dolor sit amet   elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla"

             link="View All"/>
            {/*card wrapeer */} 
            <motion.div           
             variants={variants.fadeInUp}
         >
            <Swiper 
            spaceBetween={30}
            breakpoints={{
                640:{
                    slidesPreView:1
                },
                768:{
                    slidesPerView:1.5
                },
                1280:{
                    slidesPreView:2.5
                }
            }}
            loop={true}
            navigation={{
                prevEl:".prev-btn",
                nextEl:".next-btn"
            }}
            modules={[Navigation,Autoplay]}
            className="mt-14 lg:mt-16">
                {testimonialsItems.map((item)=>(
                    //card
                    <SwiperSlide key={item.id} className="bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3">
                        <p>{item.text}</p>
                        <div className=" flex item-center justify-between   flex-wrap pt-4 border-t  border-t-orange-90 gap-4">
                          <div className="flex items-center gap-3">  
                            {/*image*/} 
                            <div className=""> 
                                <img
                                className="rounded-full"
                                 src={item.img}
                                 alt={item.author} 
                                 width={50} 
                                 height={50} /> 
                            </div>
                
            {/*author */}
            <p className="font-medium">{item.author}</p>
           
                        </div>
                        <button className="secondary-btn">Read Full Story</button>
                        </div>
                        </SwiperSlide>   
                                        ))}
            </Swiper>
</motion.div> 
             {/* navagation btns */}
             <div className="flex items-center justify-center mt-18 gap-5">
                < motion.button variants={variants.fadeInUp} className="prev-btn bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:orange:75/80 ">
                    <RiArrowLeftLine size={30}></RiArrowLeftLine>
                </motion.button>
                < motion.button variants={variants.fadeInUp} className="next-btn bg-orange-70 w-12 h-12 flex items-center justify-center rounded-xl hover:bg-orange-75 transition-colors active:orange:75/80 ">
                    <RiArrowRightLine size={30}></RiArrowRightLine>
                </ motion.button>
             </div>
        </motion.div>
       </section>
    )
}
export default Testimonials