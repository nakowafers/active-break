import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

const item = props =>
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>;

export default item;