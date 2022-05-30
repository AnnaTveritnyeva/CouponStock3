import { Button, ButtonGroup, MenuItem, MenuList, Slider, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Category, CategoryValue } from "../../model/Category";
import { Coupon } from "../../model/Coupon";
import { theme } from "../../theme";
import SingleCard from "./SingleCard";

interface FilterProps {
    coupons: Coupon[];
    onSubmit: SubmitHandler<FilterModel>;
    onReset: any;
}

const UseStyles = makeStyles({
    sliderFilter: {
    },
    card: {

    }
})

export interface FilterModel {
    price: number;
    category: Category | String;
}

function Filter(props: FilterProps): JSX.Element {
    const classes = UseStyles();

    const getMaxPrice = (): number => {
        return Math.max(...props.coupons.map(coupon => { return coupon.price; }));
    }

    const getMinPrice = (): number => {
        return Math.min(...props.coupons.map(coupon => { return coupon.price; }));
    }

    const [price, setPrice] = useState<number>(getMaxPrice());
    const [category, setCategory] = useState<Category | string>("");

    const { setValue, handleSubmit, reset } = useForm<FilterModel>({
        defaultValues: {
            price: getMaxPrice(),
            category: ""
        }
    })

    const handleCategoryMenuChange = (newCategory: Category) => {
        setPrice(getMaxPrice())
        newCategory === category ?
            setCategory("") :
            setCategory(newCategory);
    }

    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        setCategory("")
        if (typeof newValue === 'number') {
            setPrice(newValue);


        }
    };
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <SingleCard title="Filter By Price" content={
                <div>
                    <Typography>
                        Show Me Coupons Up To: {price} $
                    </Typography>

                    <Slider className={classes.sliderFilter}
                        defaultValue={price}
                        value={price}
                        aria-label="Default"
                        valueLabelDisplay="off"
                        min={getMinPrice()}
                        max={getMaxPrice()}
                        onChange={handlePriceChange}
                        disabled={getMinPrice() === getMaxPrice()}
                    />

                    {setValue("price", price)}

                </div>
            } />

            <SingleCard title="Filter By Category" content={
                <div>
                    <MenuList
                        className={classes.card}
                        variant="selectedMenu"
                    >
                        {CategoryValue.map(categoryOption =>
                            <MenuItem
                                sx={{ borderRadius: '15px' }}
                                key={categoryOption}
                                onClick={() => { handleCategoryMenuChange(categoryOption) }}
                                selected={categoryOption === category}
                            >
                                {categoryOption}
                            </MenuItem>
                        )}
                    </MenuList>
                    {setValue("category", category)}
                </div>
            } />

            <ButtonGroup sx={{ alignSelf: 'right' }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        fontFamily: 'Kanit',
                        paddingInline: theme.spacing(3),
                    }}
                    type="submit">
                    submit
                </Button>

                <Button
                    variant="text"
                    color="primary"
                    size="large"
                    sx={{
                        fontFamily: 'Kanit',
                        paddingInline: theme.spacing(3),
                    }}
                    onClick={() => {
                        setPrice(getMaxPrice())
                        setCategory("")
                        reset({ price: getMaxPrice(), category: "" })
                        props.onReset();
                    }}
                >
                    reset
                </Button>
            </ButtonGroup>
        </form>
    );
}

export default Filter;