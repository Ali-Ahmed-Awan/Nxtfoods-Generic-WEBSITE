
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       gridTemplateColumns:{
//         'auto':'repeat(auto-fill, minmax(200px, 1fr))'
//       },
//       colors:{
//         'primary':'#5F6FFF'
//       }
//     },
//   },
//   plugins: [ require('tailwind-scrollbar'),],
// }


// tailwind.config.js
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors: {
        'primary': '#5F6FFF',
        'pet-blue': '#6CA0D9',
        'pet-cream': '#FDF6EC',
        'pet-dark': '#2C3E50',
        'pet-green': '#34D399',
      }
    },
  },
  plugins: [scrollbar, 
    require('daisyui'),],
  
};
