import { Inter } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from '../context/ProjectContext';
import Tag from '../components/Tag'
import HamburgerMenu from "@/components/hamburger-menu";
import Footer from "@/components/footer";
import CorgidevCard from "@/components/corgidev-card";
import ScrollToTop from "@/components/scroll-to-top";
import TopNavBar from "@/components/top-nav-bar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProjectProvider>
        <TopNavBar />
        <pre 
          class="block w-full text-center text-3xl font-mono mt-4 mb-5"
        >My Project</pre>
          {children}
          {/* <Tag /> */}
          <HamburgerMenu />
          <CorgidevCard/>
          <ScrollToTop/>
          <Footer/>
        </ProjectProvider>
      </body>
    </html>
  );
}
