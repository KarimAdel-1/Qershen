/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    question: 'What is Qershen?',
    answer:
      'Qershen is a one-stop platform that simplifies mutual fund investing for everyone. By offering diverse mutual fund options, personalized AI-driven recommendations, and easy-to-use tools, Qershen empowers users to diversify their investments and manage their wealth confidently.',
  },
  {
    question: 'How does Qershen’s AI work?',
    answer:
      'Qershen’s AI analyzes your financial goals, risk tolerance, and market trends to recommend optimal investment allocations. By continuously learning from market data, our AI ensures that your investment strategy is always aligned with the latest trends and opportunities.',
  },
  {
    question: 'What investment options are available on Qershen?',
    answer:
      'You can invest in a range of mutual funds including stock funds, gold funds, real estate funds, and bonds. providing you with diverse options to build and manage your portfolio.',
  },
  {
    question: 'What are the minimum investment amounts?',
    answer:
      'Qershen supports micro-investing with daily investments starting as low as 10 EGP. This allows you to start investing with a small amount and gradually build your portfolio over time.',
  },
  {
    question: 'How secure is my information on Qershen?',
    answer:
      'Qershen is aiming to achieve PCI Compliance to ensure the integrity and security of your data. We use encryption, secure authentication, and regular security audits to ensure that your data remains safe and confidential.',
  },
  {
    question: 'Can I track my investment performance?',
    answer:
      'Yes, Qershen provides real-time updates and detailed reports on your portfolio’s performance. You can view your investment history, track profits and losses, and access comprehensive insights into your asset allocation.',
  },
  {
    question: 'How do I get started with Qershen?',
    answer:
      'Getting started is easy! Simply join our waiting list on our website. We will keep you updated with the latest news and launch information.',
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      key={question}
      className="border-b border-black/30 py-7"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? (
          <img src="/minus.svg" className="h-6 w-6"></img>
        ) : (
          <img src="/plus.svg" className="h-6 w-6"></img>
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: '16px',
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="py-[72px] text-black sm:py-24">
      <div className="container">
        <h2 className="mx-auto text-center text-5xl font-bold tracking-tighter sm:max-w-[748px] sm:text-6xl">
          Everything You Need to Know About Qershen
        </h2>
        <div className="mx-auto mt-12">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
