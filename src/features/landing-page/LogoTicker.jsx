import azimutLogo from '/public/logos/azimut.png';
import bankMisLogo from '/public/logos/bank-misr.png';
import beltonLogo from '/public/logos/belton.png';
import cibLogo from '/public/logos/cib.png';
import ciCapitalLogo from '/public/logos/ci-capital.png';
import nbeLogo from '/public/logos/nbe.png';

import { motion } from 'framer-motion';

const LogoTicker = () => {
  const logos = [
    azimutLogo,
    bankMisLogo,
    beltonLogo,
    cibLogo,
    ciCapitalLogo,
    nbeLogo,
  ];

  return (
    <section className="md:py-22 bg-[#fcfcfd] py-[30px]">
      <div className="container mx-auto">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="font-bold text-black/40">Upcoming partners</h2>
          </div>
          <div
            className="flex-1 overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, #202426 20%, #202426 80%, transparent)',
            }}
          >
            <motion.div
              initial={{ translateX: '0%' }}
              animate={{ translateX: '-100%' }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
              }}
              className="flex gap-14"
            >
              {/* Render logos twice to create a seamless loop */}
              {logos.concat(logos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Mutual Fund Logo"
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
