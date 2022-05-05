import { Box, Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Company from '../../model/Company';
import { Coupon } from '../../model/Coupon';
import { GetCompanies, GetCoupons } from '../../redux/selector';
import { theme } from '../../theme';
import CompanyCardItem from '../items/CompanyCardItem';
import CouponItem from '../items/CouponItem';
import JoinCompanyItem from '../items/JoinCompanyItem';
import NewsletterItem from '../items/NewsletterItem';
import Photo2 from "../../assets/photo2.png"

const UseStyles = makeStyles({
    mainPageImageBox: {
        display: 'flex',
        justifyContent: 'center',
        paddingInline: '10%'
        //justifySelf:'center'
    },
    mainPageImage: {
        width: '100%',
        //height: '400px',
        [theme.breakpoints.only("xs")]: {
            height: '180px'
        },
        [theme.breakpoints.only("sm")]: {
            height: '300px'
        },
        [theme.breakpoints.only("md")]: {
            height: '400px'
        },
        [theme.breakpoints.only("lg")]: {
            height: '500px'
        },
        [theme.breakpoints.only("xl")]: {
            height: '600px'
        },

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
           <Box className={classes.mainPageImageBox}>
                <img src={Photo2} className={classes.mainPageImage} alt=""/>
            </Box> 
 
            <Typography variant="h4" fontWeight={theme.typography.fontWeightBold} gutterBottom align="center">
                Our companies: 
              
            </Typography>
            <Box className={classes.companiesIcons}>

                {companies.map(company =>
                    <span key={company.id}> <CompanyCardItem company={company} /> </span>
                )}

            </Box>

            <Box className={classes.trendingSearches}>
                <Typography variant="subtitle2" fontWeight={theme.typography.fontWeightBold}>
                    Trending Searches: &nbsp; &nbsp;
                </Typography> 
                {companies.map(company =>
                    <span key={company.id}>
                        <Typography variant="subtitle2">
                            {company.name} Coupons &nbsp; &nbsp;
                        </Typography>

                    </span>
                )}


            </Box>


            <Grid container className={classes.couponsContainer}>
                <Typography variant="h4" fontWeight={theme.typography.fontWeightBold} gutterBottom align="center">
                    Today's Trending Coupons
                </Typography>
                <Grid className={classes.coupons} item xs={12} md={8}>
                    {coupons.slice(coupons.length - 5, coupons.length).map(coupon =>
                        <span key={coupon.id}> <CouponItem coupon={coupon} /></span>
                    )}
                </Grid>
                <Grid className={classes.additionalCards} item xs={12} md={4}>
                    
                    <NewsletterItem />
                    <JoinCompanyItem />
                  

                </Grid>
            </Grid>

            <Box className={classes.trendingSearches}>
                <Typography variant="subtitle2" fontWeight={theme.typography.fontWeightBold}>
                    Our Companies: &nbsp; &nbsp;
                </Typography>
                {companies.map(company =>
                    <span key={company.id}>
                        <Typography variant="subtitle2">
                            {company.name} &nbsp; &nbsp;
                        </Typography>

                    </span>
                )}


            </Box>

        </>
    )
}

export default HomePage;

//