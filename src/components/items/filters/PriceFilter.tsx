import { Button, Slider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Coupon } from "../../../model/Coupon";


interface PriceFilterProps {
    coupons: Coupon[];
    onSubmit: SubmitHandler<PriceFilterModel>;
}

const UseStyles = makeStyles({
    sliderFilter: {
    }
})

export interface PriceFilterModel {
    price:number;
}


function PriceFilter(props: PriceFilterProps): JSX.Element {
    const classes = UseStyles();

    const getMaxPrice = (): number => {
        return  Math.max(...props.coupons.map(coupon=>  { return coupon.price; }));
    }

    const getMinPrice = (): number => {
        return Math.min(...props.coupons.map(coupon=>  { return coupon.price; }));
    }

    const [price, setPrice] = useState<number>(getMaxPrice());

    const { setValue, handleSubmit, reset } = useForm<PriceFilterModel>({
        defaultValues:{
            price: getMaxPrice()
        }
    })

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setPrice(newValue);


        }
    };
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <Typography>
                Show Me Coupons Up To: {price} $
            </Typography>

            <Slider className={classes.sliderFilter}
                defaultValue={price}
                value = {price}
                aria-label="Default"
                valueLabelDisplay="off"
                min={getMinPrice()}
                max={getMaxPrice()}
                onChange={handlePriceChange}
                disabled={getMinPrice() === getMaxPrice()}
                // sx={{ paddingTop: theme.spacing(6) }}

            />

            {setValue("price", price)}
            <Button type="submit" onClick={()=>{
                setPrice(getMaxPrice())
                reset({price: getMaxPrice()})
               
            }}>
                reset
            </Button>
            <Button type="submit">
                submit
            </Button>
        </form>
    );
}

export default PriceFilter;