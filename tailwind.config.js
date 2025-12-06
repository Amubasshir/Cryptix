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
        // এই কিফ্রেমটিকে ব্যবহার করে কাস্টম অ্যানিমেশন ক্লাস তৈরি
        'pulse-dog-legs': 'pulse-dog-legs 2s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}