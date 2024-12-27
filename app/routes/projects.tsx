import type { MetaFunction } from "@remix-run/node";
import React from "react";
import Acknowledgement from "~/components/Acknowledgment";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// import SkillsSection from

export const meta: MetaFunction = () => {
    return [
      { title: "Gina's Projects" },
      { name: "description", content: "Welcome to Gina's Projects!" },
    ];
  };

export default function Projects() {
    return (
      <>
      <Header />
      <main>
        {/* <ProjectCards /> */}
        <Acknowledgement />
        {/* <SkillsSection /> */}
        {/* <SocialInsightSolutions /> */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
      </>
    );
}