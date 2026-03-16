"use client" 
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Modal from "./modal";

const baseImgPath = process.env.NODE_ENV === 'production'
    ? '/motion-demo'
    : '';

type HeadShotProps = {
    about?: boolean;
}

function HeadShot({ about }: HeadShotProps) {
    if (about) {{}
        return(
            <img src={baseImgPath + "/headshot.png"} width="120" height="120"
                alt="This is a photo of Po Ping looking very professional" id="headshot" />
        );
    } else {
        return(<></>);
    }
}

type SubheadingProps = {
    about?: boolean;
};   

type HeaderProps = {
    about?: boolean;
};

function Subheading({ about }: SubheadingProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);

    if (about) {
        return(
            <div>
                <p className="address" key="address">Jade Palace, Valley of Peace </p>
                <p className="tagline" key="tagline"> Dragon Warrior, Savior of China, and Part-time Noodle Maker
                </p>
                <button 
                    className="modalOpenButton"
                    onClick={() => setModalOpen(prevState => !prevState)}
                    key="modalOpenButton"
                > 
                    Resume 
                </button>
                <AnimatePresence
                // disable initial animations are children
                // that are present when the component is first rendered
                initial={false}
                // Only render one component at a time.
                // The exiting component will finish its exit
                // animation before the entering component is rendered
                onExitComplete={() => null}
                >   
                    {modalOpen && <Modal handleClose={close} key="modal"/>}
                    <hr key="hr"/>
                </AnimatePresence>
            </div>
        );
    } else {
        return(<></>);
    }
}

export default function Header({ about }: HeaderProps) {

    return (
        <div>
            <header>
                <h1 id="name-heading">Po Ping</h1>
                <HeadShot about={about} />
                <Subheading about={about} />
            </header>
        </div>
    );
}
