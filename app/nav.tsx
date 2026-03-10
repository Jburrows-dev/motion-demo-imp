import Link from "next/link";
const baseImgPath = process.env.NODE_ENV == 'development'
    ? ''    
    : '/motion-demo'; 

type NavProps = {
    link: string;
};

export default function Nav({ link }: NavProps) {
    return(
        <div>
            <nav>
            <p> Po Ping</p>
            <p><Link href={link}>Contact Po Ping</Link></p>
            </nav>
        </div>
    );
}