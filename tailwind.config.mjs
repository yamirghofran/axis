/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'slideInRight': 'slideInRight 0.8s ease-out forwards',
        'fadeInUp-delay-200': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'fadeInUp-delay-400': 'fadeInUp 0.8s ease-out 0.4s forwards',
        'fadeIn-delay-200': 'fadeIn 1s ease-out 0.2s forwards',
        'fadeIn-delay-400': 'fadeIn 1s ease-out 0.4s forwards',
        'fadeIn-delay-600': 'fadeIn 1s ease-out 0.6s forwards',
        'slideInRight-delay-400': 'slideInRight 0.8s ease-out 0.4s forwards',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}