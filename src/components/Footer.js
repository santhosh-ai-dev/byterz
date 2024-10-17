"use client";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16">
      <div>
        <Link href={"/"} className="text-3xl">
          <span className="text-rose-600">Byterz</span> Tech
        </Link>
        <p className="max-w-xs mt-4 text-sm">
          Empowering Your Vision with Technology
          Transforming Ideas into Digital Excellence
        </p>
        <div className="flex mt-8 space-x-6">
          <Link
            href="https://www.facebook.com/profile.php?id=61561130765610&mibextid=ZbWKwL"
            target="_blank"
          >
            <FacebookOutlinedIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/byterz-tech/"
            target="_blank"
          >
            <LinkedInIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
          </Link>
          <Link
            href="https://www.instagram.com/byterz_tech/?igsh=dTZ3cGprMzE0NXFv"
            target="_blank"
          >
            <InstagramIcon className="hover:text-rose-600 hover:-translate-y-1 transition-all" />
          </Link>
        </div>

        {/* Add the logo at the end */}
        <div className="flex mt-8 space-x-6">
          <img
            src={'/govt/AICTE.png'}
            alt="Byterz Tech Logo"
            className="h-12"
          />
          <img
            src={'/govt/MCA.png'}
            alt="Byterz Tech Logo"
            className="h-12"
          />
          <img
            src={'/govt/MSME.png'}
            alt="Byterz Tech Logo"
            className="h-12"
          />
        </div>

        <p className="mt-8 text-xs">© 2024 Byterz Tech - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
