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
   extend: {},
 },
 plugins: [
   require('flowbite/plugin')
 ],
}

