/** @type {import('tailwindcss').Config} */
import * as flowbite from 'flowbite-react/tailwind'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  darkMode: 'class',
  plugins: [flowbite.plugin()],
}
