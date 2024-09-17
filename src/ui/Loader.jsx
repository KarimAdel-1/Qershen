import { motion } from 'framer-motion';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(34, 179, 82, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(34, 179, 82, 1)',
  },
};

const Loader = () => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="w-[150px] h-[150px] flex overflow-hidden place-content-center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-2/3 overflow-visible stroke-[#22b352] stroke-2 stroke-linejoin-round stroke-linecap-round"
        >
          <motion.path
            d="M50.66,1a50,50,0,0,0,0,99.9,49.26,49.26,0,0,0,18.77-3.69l27.74.15V68.53A50,50,0,0,0,50.66,1Zm-.45,77.8A28.29,28.29,0,1,1,77.72,56.72l-31-9.43q4.53,15.48,9.07,31A28.49,28.49,0,0,1,50.21,78.8Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: 'easeInOut' },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Loader;
