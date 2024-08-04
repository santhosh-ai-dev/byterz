import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const HeroSection = () => {
  return (
    <section className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44">
      <motion.div
        className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold"
          variants={textVariants}
        >
          <motion.p variants={textVariants}>Byterz Tech</motion.p>
          <motion.p variants={textVariants}>Web Development</motion.p>
          <motion.p variants={textVariants}>Solutions</motion.p>
        </motion.h1>
        <motion.p
          className="text-lg leading-normal sm:leading-loose my-4 md:my-6"
          variants={textVariants}
        >
          Transform Your Vision into a Stunning Digital Reality with Our Expert
          Web Development Services.
        </motion.p>
        <motion.button
          className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full"
          variants={buttonVariants}
        >
          <Link href="https://wa.me/6383064859" target="_blank">
            Contact Us 💬
          </Link>
        </motion.button>
      </motion.div>
      <motion.div className="w-full relative" initial="hidden" animate="visible" variants={imageVariants}>
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/hero.png"}
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
