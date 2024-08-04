import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Head = () => {
  return (
    <h2 className="title text-center md:w-1/2 mx-auto py-6">Contact</h2>
  );
};

const EmailCard = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col gap-4 md:gap-6 md:cursor-pointer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 3 }}
    >
      <Image
        src="/community/1.svg"
        width={50}
        height={50}
        alt="email image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">Email</h2>
      <p className="leading-loose">byterztech@gmail.com</p>
    </motion.div>
  );
};

const PhoneNumberCard = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col gap-4 md:gap-6 md:cursor-pointer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 3 }}
    >
      <Image
        src="/community/2.svg"
        width={50}
        height={50}
        alt="phone number image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">Phone Number</h2>
      <p className="leading-loose">+91 6383064859</p>
    </motion.div>
  );
};

const LocationCard = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col gap-4 md:gap-6 md:cursor-pointer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 3 }}
    >
      <Image
        src="/community/3.svg"
        width={50}
        height={50}
        alt="location image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">Location</h2>
      <p className="leading-loose">Tiruvannamalai, Tamil Nadu.</p>
    </motion.div>
  );
};

const Community = () => {
  return (
    <section className="container mx-auto px-16 lg:px-32" id="Contact">
      <Head />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        <EmailCard />
        <PhoneNumberCard />
        <LocationCard />
      </div>
    </section>
  );
};

export default Community;
