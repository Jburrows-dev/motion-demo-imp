import Image from "next/image";
const baseImgPath = process.env.NODE_ENV == 'development'
    ? ''
    : '/motion-demo';
type CardProps = {
    title: string;
    src: string;
    alt: string;
    description: string[];
} 

export default function Card({ src, alt, title, description }: CardProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={baseImgPath + src} alt={alt} />
            <ul>
              {description.map((item, index) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
        </div>
    );
} 
