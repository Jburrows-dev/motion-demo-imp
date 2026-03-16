"use client"

import Link from "next/link";

import Nav from "./components/nav";
import Header from "./components/header";

import { useEffect } from 'react';

export default function Home() {
  return (
    <div>
      <Nav />
      <Header about={true} />
    </div>
  );
}