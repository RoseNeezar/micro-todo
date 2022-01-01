import * as React from 'react'
import { Global } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`
  }
}

const GlobalStyles = () => {return (
  <div>
    <BaseStyles />
    <Global styles={customStyles} />
  </div>
)}

export default GlobalStyles
