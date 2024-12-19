/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   "./node_modules/flowbite/**/*.js",
 ],
 theme: {
   extend: {
    colors:{
      // BG To Cont
      whiteCont1: '#f6f7fb',
      whiteCont2: '#dfecff',
      whiteCont3: '#F3F7F8',
      blueCont1: '#8496a2',
      blueCont2: '#687A86',
      blueCont3: '#052659',
      blueCont4: '#021024',
      greenCont1: '#868F74',
      greenCont2: '#D4D7C7',
      // BG To Buttons
      redButton1: '#fa5d7b',
      redButton2: '#fa5d7b',
      blueButton1: '#507bfd',
      blueButton2: '#4A5C6A',
      blueButton3: '#253745',
    },
    boxShadow: {
      'custom-inset': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      'custom-inset2': 'box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;',
    },
   },
 },
 plugins: [
   require('flowbite/plugin')
 ],
}

