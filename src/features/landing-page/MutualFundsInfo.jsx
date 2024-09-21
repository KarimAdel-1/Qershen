/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import {
  faChartPie,
  faBriefcase,
  faWater,
  faPiggyBank,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const features = [
  {
    title: 'Diversification',
    description:
      'Mutual funds spread your investments across various assets (stocks, bonds, etc.), reducing the risk of loss from a single investment.',
    icon: <FontAwesomeIcon icon={faChartPie} />,
  },
  {
    title: 'Professional Management',
    description:
      'Experienced fund managers handle investment decisions, making it easier for investors without extensive market knowledge to participate.',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    title: 'Liquidity',
    description:
      'Most mutual funds offer easy redemption, giving you access to your money quickly when needed.',
    icon: <FontAwesomeIcon icon={faWater} />,
  },
  {
    title: 'Affordability',
    description:
      'Mutual funds allow you to start investing with small amounts of money, making them an accessible and cost-effective option for beginner investors',
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
  },
  {
    title: 'Low Risk',
    description:
      'Mutual funds are managed by professionals, reducing risk and maximizing returns on investments.',
    icon: <FontAwesomeIcon icon={faShieldAlt} />,
  },
];

const MutualFundsInfo = () => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0); // Active item state

  //   const tabRef = useRef(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black ,transparent)`;

  // Function to load and animate the carousel items dynamically
  const loadShow = () => {
    const items = sliderRef.current?.querySelectorAll('.item');
    if (!items || items.length === 0) return; // Exit if items are missing

    // Reset the active item
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Show items after the active item
    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform =
        `translateX(${35 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Show items before the active item
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform =
        `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  useEffect(() => {
    if (!sliderRef.current) return;
    const { height, width } = sliderRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);

  const nextSlide = () => {
    if (active + 1 < features.length) setActive(active + 1);
  };

  const prevSlide = () => {
    if (active - 1 >= 0) setActive(active - 1);
  };

  return (
    <section className="mt-10 flex h-screen w-full overflow-x-hidden py-[72px]">
      <div className="container flex flex-col gap-10 overflow-x-hidden">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-6 text-center text-4xl font-bold tracking-tighter md:text-6xl">
            Why to invest in mutual funds?
          </h2>
          <div className="mx-auto max-w-xl">
            <p className="mt-5 text-center text-sm text-black/70 md:text-lg">
              A mutual fund pools money from many investors to purchase
              securities. These funds offer diversification, professional
              management, and liquidity, making them a great option for both new
              and experienced investors.
            </p>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="flex h-full items-center justify-center overflow-x-hidden"
        >
          {features.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="item absolute h-[320px] w-full max-w-[250px] rounded-xl border bg-white p-5 text-center transition-all duration-500 lg:w-[450px]"
            >
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-green-600"
                style={{
                  WebkitMaskImage: maskImage,
                  maskImage,
                }}
              ></motion.div>
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-black text-white">
                  {icon}
                </div>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-black/70">{description}</p>
              </div>
            </div>
          ))}
          <div className="relative flex w-full items-center md:justify-between">
            {/* Controls */}
            {active > 0 && (
              <button
                id="prev"
                onClick={prevSlide}
                className="z-10 border-none bg-transparent font-mono text-6xl font-bold text-green-500 opacity-50 transition-opacity duration-500 hover:opacity-100 sm:absolute sm:left-0"
              >
                {'<'}
              </button>
            )}
            {active < features.length - 1 && (
              <button
                id="next"
                onClick={nextSlide}
                className="z-10 border-none bg-transparent font-mono text-6xl font-bold text-green-500 opacity-50 transition-opacity duration-500 hover:opacity-100 sm:absolute sm:right-0"
              >
                {'>'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutualFundsInfo;
