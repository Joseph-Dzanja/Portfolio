module.exports = {
    theme: {
      extend: {
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-4px)' },
          },
        },
        animation: {
          float: 'float 2s ease-in-out infinite',
        },
      },
    },
  };