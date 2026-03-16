import Overlay from './overlay';
import { motion } from "motion/react";

type ModalProps = {
    handleClose: () => void,
}

const modalVariants = {
    hidden: {
        opacity: 0,
        transform: "translateY(-100vh)",
    },
    visible: {
        opacity: 1,
        transform: "0",
        transition:{
                    duration: 0.1,
                    type: "spring" as const,
                    // https://motion.dev/docs/react-transitions
                    damping: 25, // "the strength of the opposing force"
                    stiffness: 200, // "the stiffness of the spring"
                }
    },
    exit: {
        opacity: 0,
        transform: "translateY(-100vh)",    
    }
}

export default function Modal({ handleClose } : ModalProps) {
    return (
        <Overlay onClick={handleClose}> 
            <motion.div
                className='modal'
                // prevents the click on modal propagating to the Overlay
                // component and causing handleClose to trigger
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <iframe src="https://en.wikipedia.org/wiki/Po_(Kung_Fu_Panda)" title="Kung Fu Panda Wikipedia Page"> </iframe>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Overlay> 
    );
}
