import { Button, Grid, Modal, Pagination, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { GuestAxios } from '../../axios';
import { Category } from '../../model/Category';
import { Coupon } from '../../model/Coupon';
import { GetCoupons } from '../../redux/selector';
import { theme } from '../../theme';
import { CategoryFilter, CategoryFilterModel, Layout } from '../items/filters/CategoryFilter';
import PriceFilter, { PriceFilterModel } from '../items/filters/PriceFilter';
import SingleCard from '../items/SingleCard';
import makeStyles from "@mui/styles/makeStyles";
import CouponsList from '../items/CouponsList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const UseStyles = makeStyles({
    coupons: {
        [theme.breakpoints.up("md")]: {
            paddingRight: theme.spacing(4)
        }
    },
    sideFilters: {
        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    },
    topFilters: {
        [theme.breakpoints.up("md")]: {
            display: 'none'
        },
    }
});



function AllCouponsPage(): JSX.Element {
    const classes = UseStyles();
    const [coupons, setCoupons] = useState<Coupon[]>(GetCoupons())
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const items = page * 10;

    const onSubmitPrice: SubmitHandler<PriceFilterModel> = (data) => {
        GuestAxios.getAllCouponsByMaxPrice(data.price).then(response => setCoupons(response.data))
        setModalOpen(false)
    }

    const onSubmitCategory: SubmitHandler<CategoryFilterModel> = (data) => {
        if (data.category === "") {
            setCoupons(GetCoupons())
        }
        else {
            GuestAxios.getAllCouponsByCategory(data.category as Category).then(response => setCoupons(response.data))
        }
        setModalOpen(false)
    }

    useEffect(() => {
        setPage(1)
    }, [coupons])



    return (

        <div>
            <Typography align='center' variant='h4' fontWeight={theme.typography.fontWeightMedium} sx={{ marginBottom: theme.spacing(5), marginTop: theme.spacing(5) }}>
                All Our Coupons
            </Typography>
            <Grid container
            >
                <Grid item xs={12} className={classes.topFilters}>
                    <Button
                        size="large"
                        sx={{
                            fontFamily: 'Kanit',
                            fontWeight: theme.typography.fontWeightMedium,
                            paddingInline: theme.spacing(1),
                            color: theme.palette.primary.dark,
                            marginBottom: theme.spacing(2)
                        }}
                        onClick={() => setModalOpen(true)}
                        startIcon={<FilterAltIcon />}
                    >
                        <Typography
                            variant='subtitle2'
                            fontWeight={theme.typography.fontWeightMedium}
                        >
                            Filters
                        </Typography>
                    </Button>
                    <Modal open={modalOpen} sx={{ bgcolor: 'white', height: 'auto' }}>
                        <div>
                            <SingleCard title='Categories'
                                content={<CategoryFilter layout={Layout.side} onSubmit={onSubmitCategory} />}
                            />

                            <SingleCard title='Price'
                                content={<PriceFilter coupons={GetCoupons()} onSubmit={onSubmitPrice} />} />

                            <Button
                                variant='contained'
                                onClick={() => {
                                    setCoupons(GetCoupons())
                                    setModalOpen(false)
                                }}>
                                Reset
                            </Button>
                        </div>
                    </Modal>



                </Grid>
                <Grid className={classes.coupons}
                    item xs={12} md={8}
                >
                    <CouponsList coupons={coupons.slice(items - 10, items)} />
                </Grid>
                <Grid className={classes.sideFilters}
                    item md={4}
                >
                    <SingleCard title='Categories'
                        content={<CategoryFilter layout={Layout.side} onSubmit={onSubmitCategory} />}
                    />

                    <SingleCard title='Price'
                        content={<PriceFilter coupons={GetCoupons()} onSubmit={onSubmitPrice} />} />

                    <Button onClick={() => {
                        setCoupons(GetCoupons())
                        setModalOpen(false)
                    }}>
                        Reset
                    </Button>

                </Grid>
            </Grid>
            <Pagination count={Math.floor((coupons.length + 9) / 10)} page={page} onChange={handleChange} />
        </div>
    )
}

export default AllCouponsPage;