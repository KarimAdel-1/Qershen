import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: '01',
    description: 'Create an account and fill in your financial goals.',
  },
  {
    title: '02',
    description: 'Get AI-driven recommendations on the best mutual funds.',
  },
  {
    title: '03',
    description: 'Track your investments and make changes as needed.',
  },
  {
    title: '04',
    description: 'Withdraw profits or reinvest to grow your portfolio.',
  },
];

const HowItWorks = () => {
  const cardsRef = useRef(null);
  const headerRef = useRef(null);
  const animation = useRef(gsap.timeline());
  let cardHeight = 0;

  const initCards = () => {
    if (!cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children);
    if (cards.length === 0) return;

    cardHeight = cards[0].offsetHeight;
    animation.current.clear();

    cards.forEach((card, index) => {
      if (index > 0) {
        gsap.set(card, { y: index * cardHeight + 50 });
        animation.current.to(
          card,
          { y: 0, duration: index * 0.5, ease: 'ease' },
          0
        );
      }
    });
  };

  useEffect(() => {
    initCards();

    const header = headerRef.current;

    const trigger = ScrollTrigger.create({
      trigger: '.wrapper',
      start: 'top+=-70px top',
      pin: true,
      end: () => `+=${steps.length * cardHeight + header.offsetHeight}`,
      scrub: true,
      animation: animation.current,
      markers: false,
      invalidateOnRefresh: true,
    });

    ScrollTrigger.addEventListener('refreshInit', initCards);

    return () => {
      trigger.kill();
      animation.current.kill();
      ScrollTrigger.removeEventListener('refreshInit', initCards);
    };
  }, []);

  return (
    <section className="h-auto overflow-hidden py-16">
      <div className="wrapper container flex flex-col items-center justify-center gap-7">
        <div
          ref={headerRef}
          className="header flex h-40 w-full flex-col items-center justify-center"
        >
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            How It Works
          </h2>
        </div>
        <div ref={cardsRef} className="cards relative">
          {steps.map((step, index) => (
            <div
              key={index}
              style={{ boxShadow: '0 0 4px 1px rgba(34, 197, 94, 0.5)' }}
              className="card absolute bg-white p-8 text-center text-black shadow-md"
            >
              <div className="absolute inset-0 rounded-xl"></div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-black font-bold text-white">
                {step.title}
              </div>

              <p className="text-md mt-10 text-black/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
