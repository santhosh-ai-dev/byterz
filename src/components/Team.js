"use client";

import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Custom Hook for Intersection Observer
const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

const TeamCard = ({ imgSrc, name, title, socialLinks }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 2 }}
    >
      <Image
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-rose-500 mx-auto"
      />
      <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
      <p className="text-center sm:text-base text-sm">{title}</p>
      <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        {socialLinks.facebook && (
          <Link target="_blank" href={socialLinks.facebook}>
            <FacebookRoundedIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
        {socialLinks.github && (
          <Link target="_blank" href={socialLinks.github}>
            <GitHubIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
        {socialLinks.linkedin && (
          <Link target="_blank" href={socialLinks.linkedin}>
            <LinkedInIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24" id='Team'>
      <span className="service-name text-center ">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        <TeamCard
          imgSrc={"/team/1.png"}
          name="MANI BHARATHI"
          title="Full-Stack Developer"
          socialLinks={{
            linkedin: "https://www.linkedin.com/in/mani-bharathi-r-275190252",
          }}
        />
        <TeamCard
          imgSrc={"/team/2.png"}
          name="EZHILARASU"
          title="Front-End Developer"
          socialLinks={{
            linkedin: "https://www.linkedin.com/in/ezhilarasu-v-r-4745192a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          }}
        />
        <TeamCard
          imgSrc={"/team/3.png"}
          name="SANTHOSH"
          title="Back-End/Ai Developer"
          socialLinks={{
            linkedin: "https://www.linkedin.com/in/santhosh-r-ds-ai/",
          }}
        />
          <TeamCard
          imgSrc={"/team/7.jpg"}
          name="RAHULPRASAD"
          title="Software Tester"
          socialLinks={{
            linkedin: "https://www.linkedin.com/in/rahulprasad-veeramani29",
          }}
        />
      </div>
    </section>
  );
};

export default Team;
