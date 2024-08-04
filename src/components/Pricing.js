"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Plan = ({ title }) => {
  const isNegativeFeature = title.toLowerCase().includes("without domin & ssl certificate");

  return (
    <div className="flex items-center gap-2">
      {isNegativeFeature ? (
        <CancelIcon className="text-rose-600 text-xl" />
      ) : (
        <CheckCircleIcon className="text-rose-600 text-xl" />
      )}
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, btnText, trail, features, link }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border"
      ref={ref}
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={controls}
      transition={{ duration: 3 }}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        {features.map((feature, index) => (
          <Plan key={index} title={feature} />
        ))}
      </div>
      <div className="mx-auto">
        <h2 className="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>₹{price}</span>
          <span className="text-lg ml-1 font-normal text-neutral-500"></span>
        </h2>
        <Link href={link}>
          <button className="w-fit capitalize text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full">
            {btnText}
          </button>
        </Link>
        {trail && (
          <span className="block text-rose-600 mt-5 font-semibold animate-bounce cursor-pointer">
            {trail}
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState("Monthly Plan");

  const blogSiteFeatures = [
    "Upto 4-5 Pages",
    "6 Month Free Maintenance",
    "Mobile Responsive",
    "Without Domin & SSL Certificate"
  ];

  const businessSiteFeatures = [
    "Upto 200 Products",
    "1 Year Free Maintenance",
    "Mobile Responsive",
    "With Domin & SSL Certificate"
  ];

  const proMasterFeatures = [
    "Upto 500 Products",
    "2 Year's Free Maintenance",
    "Dedicated Server",
    "24/7 Support"
  ];

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <span className="service-name text-center">PRICING PLAN</span>
        <h2 className="title text-center">Choose your pricing policy</h2>
      </div>

      {plan === "Monthly Plan" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Blog Site"
            title="For Startups & Company"
            price="9,999"
            btnText="Enquire Now"
            features={blogSiteFeatures}
            link="https://wa.me/6383064859"
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Ecommerce Site"
              title="For Websites Pages"
              price="19,999"
              btnText="Enquire Now"
              features={businessSiteFeatures}
              link="https://wa.me/6383064859"
            />
          </div>
          <PricingCard
            name="Mobile Application"
            title="For Mobile App"
            price="24,999"
            btnText="Enquire Now"
            features={proMasterFeatures}
            link="https://wa.me/6383064859"
          />
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Blog Sites"
            title="For Startups & Company"
            price="0"
            btnText="Enquire Now"
            features={blogSiteFeatures}
            link="https://wa.me/6383064859"
          />
          <PricingCard
            name="Business/Company"
            title="For Enterprise Business"
            price="25"
            btnText="Enquire Now"
            trail="Or Start 10 Days Trial"
            features={businessSiteFeatures}
            link="https://wa.me/6383064859"
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Pro Master"
              title="For Pro Level Developers"
              price="54"
              btnText="Enquire Now"
              trail="Or Start 10 Days Trial"
              features={proMasterFeatures}
              link="https://wa.me/6383064859"
            />
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default Pricing;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
