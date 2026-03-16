# Motion Demo

Motion, formerly Framer-Motion, is a animation library that works with React and Vue to create complex physics-based animations.

## Installation

Use npm to install motion in your project

```bash
npm install motion
```

## Usage

```javascript 
import { motion } from 'motion/react'

// add 'motion.' before your standard React components

export default function Box() {
     return (
         <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
         >
         </motion.div>
     );
}
```

## Demonstration
Feel free to fork and clone this  repository to test adding Motion on an existing React App!

There should also be an existing fork with a few basic examples.

## Credits
Here are some resources I used while making my presentation and demo.

[Motion's Official Documentation](https://motion.dev/docs/react)

[Do you still need Framer Motion by Matt Perry](https://motion.dev/magazine/do-you-still-need-framer-motion)

[ Springy Animated Modals // Framer Motion & React Tutorial for Beginners by Fireship](https://www.youtube.com/watch?v=SuqU904ZHA4)
