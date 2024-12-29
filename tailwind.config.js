  module.exports = {
    content: ["./**/*.html"],
    theme: {
      extend: {
        colors: {
          darkGray: 'rgb(28,30,32)',
        },
        animation: {
          snowAnim: 'snowAnim 3s linear infinite',
        },
        keyframes: {
          snowAnim: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(650px)' },
          },
        },
      },
    },
    plugins: [],
  }