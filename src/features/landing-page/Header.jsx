/* eslint-disable react/prop-types */

const Header = ({ mutualFundsRef, howItWorksRef, faqsRef, heroRef }) => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3 bg-black py-3 text-sm text-white">
        <div className="inline-flex items-center gap-1">
          <p className="hidden text-white/60 md:block">
            Empowering Your Financial Future with Intelligent Investing.
          </p>
          <a href="https://5cs8k6vnlu5.typeform.com/to/fxGDl8Hv" target="blank">
            Join our waitlist &rarr;
          </a>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a
              className="cursor-pointer"
              onClick={() =>
                heroRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <img src="Asset8.png" alt="Qershen logo" width={120} />
            </a>
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a href="#features" className="cursor-pointer font-medium">
                Features
              </a>
              <a
                className="cursor-pointer font-medium"
                onClick={() =>
                  mutualFundsRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Why to invest in mutual funds?
              </a>
              <a
                className="cursor-pointer font-medium"
                onClick={() =>
                  howItWorksRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                How It Works?
              </a>
              <a
                className="cursor-pointer font-medium"
                onClick={() =>
                  faqsRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                FAQs
              </a>
              <a
                href="https://5cs8k6vnlu5.typeform.com/to/fxGDl8Hv"
                target="blank"
                className="align-items inline-flex justify-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white"
              >
                Join our waitlist
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
