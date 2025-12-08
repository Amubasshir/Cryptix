/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // কাস্টম 'pulse-dog-legs' অ্যানিমেশন কিফ্রেম
        'pulse-dog-legs': {
          '0%, 100%': { 
            transform: 'scale(1)', 
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'scale(1.05)', // একটু বড় হয়
            opacity: '1' // উজ্জ্বল হয়
          },
        }
      },
      animation: {
       
        'pulse-dog-legs': 'pulse-dog-legs 2s infinite ease-in-out',
      }

      , fontFamily: {
        // This sets your custom stack
        sans: ['"DM Sans"', '"DM Sans Placeholder"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}