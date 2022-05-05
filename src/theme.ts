import { createTheme} from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            light: 'rgb(140, 153, 154)',
            main: 'rgb(201, 219, 220)',
            dark: 'rgb(224, 117,76)',
            contrastText:'#fffffe'
          
        },
        secondary:{
            light: 'rgb(243, 241, 237)',
            main:'#f9bc60',
            dark:'rgb(174, 131, 67)',
            contrastText:'#001e1d'
        } ,
        info:{
            main: '#e16162'
        },
    },
    typography: {
        fontFamily: 'Lato,  Boogaloo, Orelega+One',
        fontWeightLight: '300',
        fontWeightRegular: '400',
        fontWeightMedium: '700',
        fontWeightBold: '900'
    },
});