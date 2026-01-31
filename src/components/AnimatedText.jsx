import * as React from "react";
import { motion } from "framer-motion";

const AnimatedText = React.forwardRef(({
  text,
  textClassName = "",
  underlineClassName = "",
  underlinePath = "M 20,10 Q 95,0 170,10 Q 245,20 280,10",
  underlineHoverPath = "M 20,10 Q 95,20 170,10 Q 245,0 280,10",
  underlineDuration = 1.5,
  className = "",
  ...props
}, ref) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: underlineDuration,
        ease: "easeInOut",
      },
    },
  };

  return (
    <span
      ref={ref}
      style={{ position: 'relative', display: 'inline-block' }}
      className={className}
      {...props}
    >
      <motion.span
        style={{ 
          fontSize: 'inherit',
          fontWeight: 'inherit',
          display: 'inline-block',
          position: 'relative',
          zIndex: 1
        }}
        className={textClassName}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        {text}
      </motion.span>
      <motion.svg
        width="100%"
        height="20"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        style={{ 
          position: 'absolute', 
          bottom: '-0.5rem', 
          left: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
        className={underlineClassName}
      >
        <motion.path
          d={underlinePath}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            d: underlineHoverPath,
            transition: { duration: 0.8 },
          }}
        />
      </motion.svg>
    </span>
  );
});

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };

