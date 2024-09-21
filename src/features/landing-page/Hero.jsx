const Hero = () => {
  return (
    <section
      className="h-[75dvh] overflow-x-clip pb-20 pt-8 text-black md:pb-10 md:pt-5"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 200% 100% at bottom left, #22b352, #fcfcfd 100%)',
      }}
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#082512] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-6xl">
              Grow Your Wealth, Effortlessly
            </h1>
            <p className="mt-6 text-xl tracking-tighter text-[#082512]">
              Unlock smarter investments with Qershen. Our AI-driven platform
              makes it easy to invest in stocks, gold, real estate, and
              more—tailored to your goals. Start building your financial future
              today, hassle-free.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">Start Investing Now</button>
              <button className="btn btn-text">Learn more &rarr;</button>
            </div>
          </div>

          {/* <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <img
              src="/cog.png"
              alt="cog image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
            />
            <img
              src="/cylinder.png"
              alt="cylinder image"
              width={200}
              height={200}
              className="-left-32 -top-8 hidden md:absolute md:block"
            />
            <img
              src="/noodle.png"
              alt="noodle image"
              width={200}
              className="absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
