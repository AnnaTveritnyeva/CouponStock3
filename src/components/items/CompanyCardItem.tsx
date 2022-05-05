import { Box, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Company from "../../model/Company";
import { theme } from "../../theme";
import "./CompanyItem.css";

interface CompanyProps {
    company: Company;
}

//styles 
const UseStyles = makeStyles({
    card: {
        justifySelf: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '100px',
        height: '100px',
        //borderRadius: '15%',
        marginInline: theme.spacing(4),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            height: '60px',
            width: '60px'
        },
    },
    image: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',

    },
    box: {
        margin: theme.spacing(3),
        backgroundColor: 'white',
        borderRadius: theme.shape.borderRadius,

        "&:hover": {
            //boxShadow: theme.shadows[10],
            // border: '1.5px solid black', 

        },
    },
    companyBox: {
        //paddingInline: theme.spacing(3),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center'
    },
    couponTitleBox: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        width: '100%',
        borderBottomRightRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
        // borderTop: '1.5px solid black'

        //paddingBlock:theme.spacing(1)
    }

});


function CompanyCardItem(props: CompanyProps): JSX.Element {
    const classes = UseStyles();

    return (
        <Box className={classes.box}>
            <Box className={classes.companyBox}>
                <Box className={classes.card}>
                    <CardMedia
                        className={classes.image}
                        image={props.company.image}
                    />
                </Box>
                <Typography variant="subtitle2" align="center">
                    {props.company.name}
                </Typography>
            </Box>
            <Box className={classes.couponTitleBox}>
                <Typography
                    variant="body2"
                    align="center"
                    fontWeight={theme.typography.fontWeightBold}
                    color={theme.palette.primary.contrastText}
                    sx={{ padding: theme.spacing(1) }}
                >
                    {props.company.coupons.length} coupons
                </Typography>
            </Box>
        </Box >
    );
}

export default CompanyCardItem;