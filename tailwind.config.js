/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      customDefaultBlack: 'var(--customDefaultBlack)',
      customDefaultWhite: 'var(--customDefaultWhite)',

      customWhiteAntiFlash: 'var(--customWhiteAntiFlash)',
      //Gray
      customGrayLighter: 'var(--customGrayLighter)',
      customGrayLight: 'var(--customGrayLight)',
      customGray: 'var(--customGray)',
      customGrayMedium: 'var(--customGrayMedium)',
      customGrayDark: 'var(--customGrayDark)',
      customGrayDarker: 'var(--customGrayDarker)',
      customGrayCloud: 'var(--customGrayCloud)',
      customGrayDarkCloud: 'var(--customGrayDarkCloud)',
      // Status
      customSuccess: 'var(--customSuccess)',
      customError: 'var(--customError)',
      customWarning: 'var(--customWarning)',

      //Background
      customBackground: 'var(--customBackground)',
      customBackgroundElavated: 'var(--customBackgroundElavated)',
      customBackgroundItem: 'var(--customBackgroundItem)',

      //Primary
      customPrimary: 'var(--customPrimary)',
      customPrimaryLight: 'var(--customPrimaryLight)',
      //Secondary
      customSecondary: 'var(--customSecondary)',
      //Tertiary
      customtertiary: 'var(--customtertiary)',

      //Red
      customRed: 'var(--customRed)',
      customRedLight: 'var(--customRedLight)',

      // Yellow
      customYellow: 'var(--customYellow)',

      // Green
      customGreen: 'var(--customGreen)',

      // Status
      statusAccepted: 'var(--statusAccepted)',
      statusFinished: 'var(--statusFinished)',
      statusDelivered: 'var(--statusDelivered)',
      statusStarted: 'var(--statusStarted)',
      statusRejected: 'var(--statusRejected)',
      statusPlanning: 'var(--statusPlanning)',
      statusUnstarted: 'var(--statusUnstarted)',
      statusUnscheduled: 'var(--statusUnscheduled)'
    },
    extend: {}
  },
  plugins: [require('tailwindcss-primeui')],
  darkMode: 'class'
}
