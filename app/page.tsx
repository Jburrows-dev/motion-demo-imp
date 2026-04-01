"use client"

import Link from "next/link";

import Contact from "./contact/page";
import Nav from "./components/nav";
import Header from "./components/header";
import Education from "./components/education";
import Honors from "./components/honors";
import Leadership from "./components/leadership";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

import { useEffect } from 'react';

export default function Home() {
  return (
    <div>
      <Nav link="/contact" />
      <Header about={true} />
      <Education /> 
      <Honors />
      <Skills />
      <Leadership />
      <Projects />
      <Footer link="/contact" />
    </div>
  );
}