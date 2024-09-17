/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      strokeWidth: {
        2: '2',
      },
      strokeLinejoin: {
        round: 'round',
      },
      strokeLinecap: {
        round: 'round',
      },
    },
  },
  plugins: [],
};
