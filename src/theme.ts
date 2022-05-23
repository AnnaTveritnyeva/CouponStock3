import { createTheme} from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            light: 'rgb(140, 153, 154)',
            main: 'rgb(201, 219, 220)',
            dark: '#AFC2C2',
            contrastText:'#fffffe'
          
        },
        secondary:{
            light: 'rgb(243, 241, 237)',
            main:'#f9bc60',
            dark:'rgb(224, 117,76)',
            contrastText:'rgb(42,44,44)'
        } ,
        info:{
            main: '#e16162'
        },
        common:{
            black: 'rgb(42,44,44)'
        },
        text:{
            primary: 'rgb(42,44,44)',
        }
    },
    typography: {
        fontFamily: 'Lato,  Boogaloo, Orelega+One, Dela+Gothic+One, Abril+Fatface, Kanit',
        fontWeightLight: '300',
        fontWeightRegular: '400',
        fontWeightMedium: '700',
        fontWeightBold: '800'
    },
});