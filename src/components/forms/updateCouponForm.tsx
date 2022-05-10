import { Autocomplete, Button, TextField } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CompanyAxios } from "../../axios";
import { CategoryValue } from "../../model/Category";
import { Coupon } from "../../model/Coupon";
import { UpdateCoupon } from "../../redux/selector";
interface UpdateCouponProps{
    coupon:Coupon
}
function UpdateCouponForm(props:UpdateCouponProps): JSX.Element {
    const { register, setValue, handleSubmit } = useForm<Coupon>();
    const [category, setCategory] = useState<string>()

    const onSubmit: SubmitHandler<Coupon> = (data) => {
        console.log(data)
       CompanyAxios.updateCoupon(data)
       .then(() => {
            UpdateCoupon(data)
            console.log("coupon succsessfully updated")
    })
       .catch(err=> console.log(err))
    }

    const handleCategoryChange = (args: SyntheticEvent) => {
        setCategory((args.target as HTMLInputElement).value)
    }
    
    useEffect(() => {
        setValue('id', props.coupon.id)
        setValue('companyId',props.coupon.companyId)
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="title" variant="outlined" {...register("title", { required: true })} required  defaultValue={props.coupon.title}/>
            <TextField label="description" variant="outlined" {...register("description", { required: true })} required defaultValue={props.coupon.description}/>
            <TextField label="startDate" type="date" variant="outlined" {...register("startDate", { required: true })} required defaultValue={props.coupon.startDate}/>
            <TextField label="endDate" type="date" variant="outlined" {...register("endDate", { required: true })} required defaultValue={props.coupon.endDate}/>
            <TextField label="amount" type="number" variant="outlined" {...register("amount", { required: true })} required defaultValue={props.coupon.amount}/>
            <TextField label="price" type="number" variant="outlined" {...register("price", { required: true })} required defaultValue={props.coupon.price}/>
            <Autocomplete
                defaultValue={props.coupon.category}
                //value={category}
                onChange={handleCategoryChange}
                options={CategoryValue}
                renderInput={(params) => <TextField {...params} label="category" {...register("category", { required: true })} required  defaultValue={props.coupon.category}/>}
            />
            <Button type="submit" color="primary">Send</Button> 
        </form>
    );
}

export default UpdateCouponForm;
