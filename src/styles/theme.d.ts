import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      black: string
      gray: string
      backgroundColor: string
      greenish: string
      red: string
      deepBlack: string
      darkGray: string
      navbarItemHoverBackground: string
      layoutBorder: string
      bottomTabBackground: string
      bottomTabBorderTop: string
    }
    borderRadius: string
    normalFontSize: string
    largeFontSize: string
    marginHorizontal: string
    paddingHorizontal: string
    headerHeight: string
    bottomNavbarHeight: string
    contentMaxWidth: string
    mainLayoutMaxWidth: string
  }
}
