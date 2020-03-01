import 'styled-components'

// Color object interfaces
interface ColorObject {
  name: string
  sassToken: string
  hex: string
  variants?: ColorObjectGroup
}

interface ColorObjectGroup {
  [color:string]: ColorObject
}

// Module types
declare module 'styled-components' {

  export interface DefaultTheme {
    borderRadius: string

    colors: {
      primary: ColorObjectGroup
      // secondary: [ColorObject]
      // accent: [ColorObject]
      // chart: [ColorObject]
      // social: [ColorObject]
    }
  }
}
