/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                baiJamjuree: ['"Bai Jamjuree"', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif']
            }
        }
    },
    plugins: []
};
