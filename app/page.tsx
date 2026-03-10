"use client"

import Link from "next/link";

import Contact from "./contact/page";
import Nav from "./nav";
import Header from "./header";
import Education from "./education";
import Honors from "./honors";
import Leadership from "./leadership";
import Skills from "./skills";
import Projects from "./projects";
import Footer from "./footer";

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