import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkCard = ({ num, title, details, duration, certificate, instruction, offerLetterInfo, buttonLabel, buttonLink, animation, isVisible }) => {
  return (
    <motion.div
      initial={animation.initial}
      animate={isVisible ? animation.animate : {}} // Animate only when isVisible is true
      transition={{ duration: 0.5, ease: "easeInOut", delay: animation.delay }}
      whileHover={{ scale: 1.05 }}
      className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left p-5 border border-blue-200 rounded-lg shadow-lg min-h-[350px]"
    >
      <motion.span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-200 bg-rose-700 rounded-full py-4 px-4">
        {num}
      </motion.span>
      <motion.h2 className="text-xl font-semibold leading-relaxed">{title}</motion.h2>
      <motion.p className="leading-loose">{details}</motion.p>
      {instruction && <motion.p className="text-sm text-gray-400 leading-loose">{instruction}</motion.p>}
      {offerLetterInfo && <motion.p className="text-sm text-gray-400 leading-loose">{offerLetterInfo}</motion.p>}
      {buttonLabel && (
        <div className="mt-4">
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-rose-600 text-white font-semibold py-2 px-4 rounded hover:bg-rose-500"
            >
              {buttonLabel}
            </motion.button>
          </a>
        </div>
      )}
      {duration && (
        <motion.p className="font-semibold">
          <strong>Duration:</strong> {duration}
        </motion.p>
      )}
      {certificate && (
        <motion.p className="font-semibold">
          <strong>Certificate:</strong> {certificate}
        </motion.p>
      )}
    </motion.div>
  );
};

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Adjust this value to trigger the animation earlier or later when scrolling
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      id='Internship'
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full bg-black text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center"

    >
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Join Byterz Tech as an Intern
          </h2>
          <p className="text-center text-rose-200">
            Explore our internship program designed to help you grow professionally.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.2, staggerChildren: 0.2 },
            },
          }}
        >
          <div className="relative">
            <WorkCard
              num="01"
              title="REGISTER & OFFER LETTER"
              details="Complete your internship program application by using the button below."
              instruction="Please ensure all fields are filled out correctly."
              buttonLabel="View Registration Form"
              buttonLink="https://forms.gle/osFrC5p1zf9pNB5S6"
              animation={{ initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 }, delay: 0.2 }}
              isVisible={isVisible} // Pass visibility state
            />
          </div>

          <div className="relative">
            <WorkCard
              num="02"
              title="TASK ASSIGNMENT"
              details="In our WhatsApp group, we will provide you with five different tasks. You can choose any three to complete."
              instruction="Receive tasks that you can follow and complete at your own pace."
              buttonLabel="Join Whatsapp"
              buttonLink="https://whatsapp.com/channel/0029VanI7nWICVfmZNowKf3x"
              animation={{ initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 }, delay: 0.4 }}
              isVisible={isVisible} // Pass visibility state
            />
          </div>

          <div className="relative">
            <WorkCard
              num="03"
              title="SUBMISSION & CERTIFICATION"
              details="Submit your completed tasks for review and receive your certificate."
              duration="1 Month"
              certificate="Certificate provided within 1 week"
              animation={{ initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 }, delay: 0.6 }}
              isVisible={isVisible} // Pass visibility state
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
