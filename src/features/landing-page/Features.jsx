const Features = () => {
  const features = [
    {
      title: 'Ease of Use',
      description:
        'Qershen simplifies investment through a user-friendly interface and intuitive platform, making it accessible to everyone.',
    },
    {
      title: 'Personalized Recommendations',
      description:
        'Our AI-powered platform provides tailored investment recommendations based on your risk profile and personality analysis.',
    },
    {
      title: 'Diversification and Goal-Based Investing',
      description:
        'We offer a wide range of mutual funds across diverse sectors, enabling users to diversify their portfolios and achieve their financial goals.',
    },
    {
      title: 'All-in-One',
      description: 'one-stop solution for investing in multiple mutual funds.',
    },
    {
      title: 'Affordable Investing for Everyone',
      description: 'Invest with Just 10 EGP and Grow Your Wealth.',
    },
  ];

  return (
    <section className="py-[72px] text-black sm:py-24">
      <div className="container">
        <div className="flex flex-col justify-center">
          <h2 className="mx-auto text-center text-5xl font-bold tracking-tighter sm:max-w-[648px] sm:text-6xl">
            Features
          </h2>
          <div className="">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 text-center shadow-md"
              >
                <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
