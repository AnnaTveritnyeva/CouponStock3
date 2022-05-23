import { alpha, Box, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import Company from "../../model/Company";
import { theme } from "../../theme";

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
            boxShadow: theme.shadows[5],

        },
    },
    companyBox: {
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
    }

});




function CompanyCardItem(props: CompanyProps): JSX.Element {
    const classes = UseStyles();

    const history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: "/company/:" + props.company.name, state: props.company });
    }

    return (
        <Box className={classes.box} onClick={handleClick}>
            <Box className={classes.companyBox}>
                <Box className={classes.card}>
                    <CardMedia
                        className={classes.image}
                        image={props.company.image}
                    />
                </Box>
                <Typography 
                variant="overline"
                color={alpha(theme.palette.common.black, 0.8)}
                
                 align="center"
                 fontWeight={theme.typography.fontWeightMedium}
                 >
                    {props.company.name}
                </Typography>
            </Box>
            <Box className={classes.couponTitleBox}>
                <Typography
                    variant="subtitle2"
                    align="center"
                    color={theme.palette.primary.contrastText}
                    sx={{ padding: theme.spacing(1) }}
                >
                   total {props.company.coupons.length} coupons 
                </Typography>
            </Box>
        </Box >
    );
}

export default CompanyCardItem;