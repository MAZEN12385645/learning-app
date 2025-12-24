import Title from "./Title"
import { benefitItems } from "../constant/data"
import { RiArrowRightUpLine } from "@remixicon/react"
import { motion } from "motion/react";
import * as variants from "../motion/animation"
const Benefits = () =>{
    return(
<section className="section">
    <motion.div className="container"            
     variants={variants.staggerContainer} 
                whileInView="show" 
                initial="hidden" 

             >
        {/*title */}
<Title 
  title="Benefits"
  text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget."
  link="View all"
/>
        {/*card warpper */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
{benefitItems.map((item)=>(
    //card
    <motion.div variants={variants.fadeInUp} className="bg-white p-10 flex flex-col rounded-xl">
        {/*icon*/}
        <div className="bg-orange-75 w-[55%] h-24 flex items-center justify-center mx-auto rounded-xl mb-8">
            <img src={item.icon} alt={item.title} width={64} height={64} />
        </div>
        {/*content */}
        <div className="mb-4 text-center space-y-3.5">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
        </div>
{/*button */}
<button className="mt-auto ml-auto border border-white-95 w-24  h-14 flex items-center justify-center rounded-md text-orange-50 transition-colors hover:bg-orange-50 hover:text-white">
    <RiArrowRightUpLine  size={26}></RiArrowRightUpLine>
</button>
    </motion.div>
))}
        </div>
    </motion.div>
</section>
)
}
export default Benefits