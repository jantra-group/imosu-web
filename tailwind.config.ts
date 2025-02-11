import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#E97253',
          300: '#D7321F',
          500: '#CC0000',
          600: '#970202',
          700: '#820202',
          800: '#6D0303',
        },
        daimder: {
          200: '#FFD78D',
          300: '#FFC75D',
          500: '#FFB91D',
          600: '#B28116',
          700: '#946A14',
          800: '#B28116',
        },
        decatra: {
          200: '#ACCD9B',
          300: '#88BA74',
          500: '#6AA84F',
          600: '#477333',
          700: '#395E28',
          800: '#28491D',
        },
        neutral: {
          100: '#FFFFFF',
          300: '#D9D9D9',
          500: '#A3A3A3',
          600: '#6C6C6C',
          700: '#363636',
          800: '#000000',
        },
      },
      fontSize: {
        h1: ['42px', { fontWeight: '800', lineHeight: '1.2' }], // Extrabold
        h2: ['36px', { fontWeight: '700', lineHeight: '1.3' }], // Bold
        h3: ['28px', { fontWeight: '700', lineHeight: '1.3' }], // Bold
        h4: ['24px', { fontWeight: '600', lineHeight: '1.3' }], // Bold/SemiBold
        h5: ['20px', { fontWeight: '600', lineHeight: '1.3' }], // SemiBold
        h6: ['16px', { fontWeight: '600', lineHeight: '1.3' }], // SemiBold
        paragraph: ['14px', { fontWeight: '400', lineHeight: '1.5' }], // Regular
      },
    },
  },
  plugins: [],
} satisfies Config;
