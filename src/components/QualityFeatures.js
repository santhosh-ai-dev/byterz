import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const leftToRightVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const rightToLeftVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const QualityFeature = ({ imgSrc, title, desc, variants }) => {
  return (
    <motion.div
      className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">QUALITY FEATURES</span>
      <h2 className="title text-center ">Amazing useful features</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Custom Web Development"
          desc="Tailored Solutions to Fit Your Needs, Responsive and Mobile-Friendly Design, Scalable Architecture, SEO Optimized for Better Visibility."
          variants={leftToRightVariants}
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="E-Commerce Solutions"
          desc="Secure Payment Gateway Integration, User-Friendly Shopping Experience, Inventory and Order Management, Customizable Product Pages."
          variants={rightToLeftVariants}
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Web Application Development"
          desc="Intuitive User Interface, Robust Backend Development, Real-Time Data Processing, API Integration "
          variants={leftToRightVariants}
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Maintenance and Support"
          desc="Regular Updates and Security Patches, 24/7 Technical Support, Performance Monitoring and Optimization, Backup and Recovery Services"
          variants={rightToLeftVariants}
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
