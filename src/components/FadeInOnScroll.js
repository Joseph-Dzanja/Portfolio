'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function FadeInOnScroll({ children, delayOrder = 0 }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: delayOrder * 0.1,
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      }}
      animate={controls}
      initial="hidden"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
}
