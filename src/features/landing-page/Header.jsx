const Header = () => {
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
            <img src="Asset8.png" alt="Qershen logo" width={120} />
            <button className="h-5 w-5 md:hidden">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a href="#" className="font-medium">
                Features
              </a>
              <a href="#" className="font-medium">
                Why to invest in mutual funds?
              </a>
              <a href="#" className="font-medium">
                How It Works?
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
