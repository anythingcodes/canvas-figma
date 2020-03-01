import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    primary: {
      'calypso': {
        name: 'Calypso',
        sassToken: '$color-calypso',
        hex: '#00a4bd',
        variants: {
          'shade': {
            name: 'Calypso Dark',
            sassToken: '$color-calypso-dark',
            hex: '#0091ae'
          },
          'medium tint': {
            name: 'Calypso Medium',
            sassToken: '$color-calypso-medium',
            hex: '#7fd1de'
          },
          'light tint': {
            name: 'Calypso Light',
            sassToken: '$color-calypso-light',
            hex: '#e5f5f8'
          }
        }
      },

    }
  },
}

export { theme }
