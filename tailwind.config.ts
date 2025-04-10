import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/***/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			'custom-dark': '0 4px 8px -5px rgba(0, 0, 0, 0.15)',
  			'custom-neutral': '4px 4px 20px rgba(203, 202, 202, 0.25)'
  		},
  		fontFamily: {
  			montserrat: [
  				'var(--font-montserrat)',
  				'sans-serif'
  			],
  			robotoCondensed: [
  				'Roboto Condensed"',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				'200': '#E97253',
  				'300': '#D7321F',
  				'500': '#CC0000',
  				'600': '#970202',
  				'700': '#820202',
  				'800': '#6D0303',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			daimder: {
  				'200': '#FFD78D',
  				'300': '#FFC75D',
  				'500': '#FFB91D',
  				'600': '#B28116',
  				'700': '#946A14',
  				'800': '#B28116'
  			},
  			decatra: {
  				'200': '#ACCD9B',
  				'300': '#88BA74',
  				'500': '#6AA84F',
  				'600': '#477333',
  				'700': '#395E28',
  				'800': '#28491D'
  			},
  			neutral: {
  				'100': '#FFFFFF',
  				'300': '#D9D9D9',
  				'500': '#A3A3A3',
  				'600': '#6C6C6C',
  				'700': '#363636',
  				'800': '#000000'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
