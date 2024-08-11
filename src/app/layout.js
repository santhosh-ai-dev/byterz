import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Byterz Tech",
  description: "Byters is a leading web design and development agency offering custom E-Commerce solutions, expert web development, and reliable maintenance support. We build modern, user-friendly websites that drive business growth and deliver seamless digital experiences.",
  keywords: [
    "Byterz tech",
    "Byterz Technology",
    "Best Web service in Tiruvannamalai",
    "Tiruvannamalai Startup Companies",
    "Startup Companies in Tiruvannamalai",
    "Web Design and Development",
    "Custom Web Development Services",
    "E-Commerce Solutions Provider",
    "Website Maintenance and Support",
    "Professional Web Design Agency",
    "Web Development for Businesses",
    "Affordable E-Commerce Development",
    "Responsive Web Design Services",
    "Full-Service Web Development",
    "User-Friendly Website Design",
    "Custom E-Commerce Website Development",
    "Web Design and Maintenance Solutions",
    "Digital Solutions for Businesses",
    "Modern Web Development Company",
    "Comprehensive Web Support Services"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://byterz-tech.netlify.app/" />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
