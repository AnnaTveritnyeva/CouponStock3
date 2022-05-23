import { Box, Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Company from '../../model/Company';
import { Coupon } from '../../model/Coupon';
import { GetCompanies, GetCoupons } from '../../redux/selector';
import { theme } from '../../theme';
import CompanyCardItem from '../items/CompanyCardItem';
import JoinCompanyItem from '../items/JoinCompanyItem';
import NewsletterItem from '../items/NewsletterItem';
import Photo2 from "../../assets/photo2.png"
import CouponsList from '../items/CouponsList';

const UseStyles = makeStyles({
    mainPageImageBox: {
        display: 'flex',
        justifyContent: 'center',
        paddingInline: '10%',
        paddingBlock: theme.spacing(5)
    },
    mainPageImage: {
        width: '100%',
    },
    companiesIcons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',

    },
    couponsContainer: {
        display: 'flex'
    },
    trendingSearches: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: theme.spacing(2),
        border: '1.5px dashed',
        borderColor: theme.palette.primary.main
    },
    additionalCards: {

    },
    coupons: {
        [theme.breakpoints.up("md")]: {
            paddingRight: theme.spacing(4)
        }
    }

})

function HomePage(): JSX.Element {
    const companies: Company[] = GetCompanies()
    const coupons: Coupon[] = GetCoupons()

    const classes = UseStyles();
    return (
        <>
            <Grid container sx={{ width: '100%' }} className={classes.mainPageImageBox}>
                <img src={Photo2} className={classes.mainPageImage} alt="" />
            </Grid>

            <Typography variant="h3" fontWeight={theme.typography.fontWeightMedium} gutterBottom align="center">
                Our companies:
            </Typography>
            <Box className={classes.companiesIcons}>
                {companies.map(company =>
                    <span key={company.id}> <CompanyCardItem company={company} /> </span>
                )}
            </Box>

            <Typography variant="h3" fontWeight={theme.typography.fontWeightMedium} gutterBottom align="center"
            sx={{marginBlock: theme.spacing(5)}}
            >
                Today's Trending Coupons
            </Typography>
            <Grid container className={classes.couponsContainer}>

                <Grid className={classes.coupons} item xs={12} lg={8}>
                    <CouponsList coupons={coupons.slice(coupons.length - 5, coupons.length)} />
                </Grid>
                <Grid className={classes.additionalCards} item xs={12} lg={4}>
                    <NewsletterItem />
                    <JoinCompanyItem />
                </Grid>
            </Grid>
        </>
    )
}

export default HomePage;

//