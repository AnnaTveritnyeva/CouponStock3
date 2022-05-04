import { Autocomplete, Button, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CompanyAxios } from "../../axios";
import { CategoryValue } from "../../model/Category";
import { Coupon } from "../../model/Coupon";
import { AddCoupon } from "../../redux/selector";

function AddCouponForm(): JSX.Element {
    const { register, handleSubmit } = useForm<Coupon>();
    const [category, setCategory] = useState<string>()

    const onSubmit: SubmitHandler<Coupon> = (data) => {
        CompanyAxios.addCoupon(data)
        .then(()=> {
            AddCoupon(data)
            console.log("added new coupon")
    
    })
        .catch(err=>console.log(err))
    }

    const handleCategoryChange = (args: SyntheticEvent) => {
        setCategory((args.target as HTMLInputElement).value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="title" variant="outlined" {...register("title", { required: true })} required />
            <TextField label="description" variant="outlined" {...register("description", { required: true })} required />
            <TextField label="startDate" type="date" variant="outlined" {...register("startDate", { required: true })} required />
            <TextField label="endDate" type="date" variant="outlined" {...register("endDate", { required: true })} required />
            <TextField label="amount" type="number" variant="outlined" {...register("amount", { required: true })} required />
            <TextField label="price" type="number" variant="outlined" {...register("price", { required: true })} required />
            <Autocomplete
                value={category}
                onChange={handleCategoryChange}
                options={CategoryValue}
                renderInput={(params) => <TextField {...params} label="category" {...register("category", { required: true })} required />}
            />
            <Button type="submit" color="primary">Send</Button>
        </form>
    );
}

export default AddCouponForm;
