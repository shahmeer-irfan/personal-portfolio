// app/layout.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahmeer's Portfolio",
  description:
    "Shahmeer is a Software Engineer and Full Stack Developer. Explore his portfolio showcasing skills, projects, and experience.",
  openGraph: {
    title: "Shahmeer's Portfolio",
    description:
      "Shahmeer is a Software Engineer and Full Stack Developer. Explore his portfolio showcasing skills, projects, and experience.",
    url: "https://shahmeerirfan.me",
    siteName: "Shahmeer's Portfolio",
    images: [
      {
        url: "https://shahmeerirfan.me/shahmeerirfan.svg",
        width: 1200,
        height: 630,
        alt: "Shahmeer Irfan's Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahmeer's Portfolio",
    description:
      "Shahmeer is a Software Engineer and Full Stack Developer. Explore his portfolio showcasing skills, projects, and experience.",
    image: "https://shahmeerirfan.me/shahmeerirfan.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/shahmeerirfan.svg" type="image/svg+xml" />
        <meta
          name="description"
          content="Shahmeer is a Software Engineer and Full Stack Developer. Explore his portfolio showcasing skills, projects, and experience."
        />
        <meta property="og:title" content="Shahmeer's Portfolio" />
        <meta
          property="og:description"
          content="Shahmeer is a Software Engineer and Full Stack Developer. Explore his portfolio showcasing skills, projects, and experience."
        />
        <meta
          property="og:image"
          content="https://shahmeerirfan.me/shahmeerirfan.svg"
        />
        <meta property="og:url" content="https://shahmeerirfan.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shahmeer's Portfolio" />
        <meta
          name="twitter:description"
          content="Shahmeer is a Software Engineer and Full Stack Developer. Explore his portfolio showcasing skills, projects, and experience."
        />
        <meta
          name="twitter:image"
          content="https://shahmeerirfan.me/shahmeerirfan.svg"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-black"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
