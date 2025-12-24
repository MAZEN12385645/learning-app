// stagger container : animation child elements sequentially with a delay between each
export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        }
    },
};

export const fadeInUp = {
    hidden: {
        y: 30,
        opacity: 0,
        filter: "blur(10px)",
    },
    show: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};
