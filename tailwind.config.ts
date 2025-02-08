import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        darkBlue: '#020A19',
        primaryRed: '#DD0735',
        primaryRedHover: '#BB022A',
        placeholderGray: '#C6C6C6',
        linkTextRed: '#DD0735',
        graySecondary: '#F7F7F7',
        darkBlueSecondary: '#1A1C2B',
      },
    },
  },
  plugins: [],
} satisfies Config;
