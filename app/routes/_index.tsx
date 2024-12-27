import type { MetaFunction } from "@remix-run/node";
import React from "react";
import HeroSection from "~/components/HeroSection";
import Acknowledgement from "~/components/Acknowledgment";
import ProjectsSection from "~/components/ProjectsSection"
// import ContactSection from 
// import SocialInsightSolutions from
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Gina's Portfolio" },
    { name: "description", content: "Welcome to Gina's Portfolio!" },
  ];
};

export default function Index() {
  return (
    <>
    <Header />
    <main>
      <HeroSection />
      <Acknowledgement />
      <ProjectsSection />
      {/* <SocialInsightSolutions /> */}
      {/* <ContactSection /> */}
    </main>
    <Footer />
    </>
  );
}