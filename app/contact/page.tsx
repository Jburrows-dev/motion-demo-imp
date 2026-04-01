import Link from "next/link";
import Home from "../page";
import Nav from "../components/nav";
import Header from "../components/header";
import Form from "./form";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div>
        <Nav link="/" />
        <Header about={false} />
        <Form />
        <Footer id="footerContact" link="/" />
    </div>
  );
} 