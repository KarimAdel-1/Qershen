import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandHoldingHeart,
  faChartLine,
  faUserCog,
  faTools,
  faPiggyBank,
} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active feature

  const features = [
    {
      title: 'Ease of Use',
      description:
        'Qershen simplifies investment through a user-friendly interface and intuitive platform, making it accessible to everyone.',
      icon: faHandHoldingHeart, // Add your desired icon
    },
    {
      title: 'Personalized Recommendations',
      description:
        'Our AI-powered platform provides tailored investment recommendations based on your risk profile and personality analysis.',
      icon: faUserCog,
    },
    {
      title: 'Diversification and Goal-Based Investing',
      description:
        'We offer a wide range of mutual funds across diverse sectors, enabling users to diversify their portfolios and achieve their financial goals.',
      icon: faChartLine,
    },
    {
      title: 'All-in-One',
      description: 'One-stop solution for investing in multiple mutual funds.',
      icon: faTools,
    },
    {
      title: 'Affordable Investing for Everyone',
      description: 'Invest with Just 10 EGP and Grow Your Wealth.',
      icon: faPiggyBank,
    },
  ];

  return (
    <section className=" border py-[72px] text-black sm:py-24">
      <div className="container">
        <div className="flex flex-col justify-center gap-20">
          <h2 className="mx-auto text-center text-5xl font-bold tracking-tighter sm:max-w-[648px] sm:text-6xl">
            Features
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            {features.map((feature, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setActiveIndex(index)} // Update active index on click
                  className={`flex w-full items-center rounded-lg border p-4 text-left font-semibold tracking-tighter transition-colors ${
                    activeIndex === index
                      ? 'bg-green-500 text-white'
                      : 'bg-white'
                  }`}
                >
                  <FontAwesomeIcon icon={feature.icon} className="mr-2" />
                  {feature.title}
                </button>
                {activeIndex === index && (
                  <div className="rounded-lg bg-white p-6 tracking-tight shadow-md">
                    <p>{feature.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
