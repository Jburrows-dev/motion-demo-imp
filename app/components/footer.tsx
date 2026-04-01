type FooterProps = {
    link: string;
    id?: string;
};

import Link from "next/link";
export default function Footer({link, id}: FooterProps) {
    return (
        <footer>
          <p> &copy; <Link id={id} href={link}>Po Ping</Link> </p>
        </footer>
    );
}