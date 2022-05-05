import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminAxios } from "../../axios";
import Customer from "../../model/Customer";
import { UpdateCustomer } from "../../redux/selector";
interface UpdateCustomerProps {
    customer: Customer;
}
function UpdateCustomerForm(props: UpdateCustomerProps): JSX.Element {
    const { register, setValue, handleSubmit } = useForm<Customer>();

    const onSubmit: SubmitHandler<Customer> = (data) => {
        // if (data.password === "") {
        //     data.password = props.customer.password;
        // }

        AdminAxios.updateCustomer(data)
            .then(() => UpdateCustomer(data))
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {setValue('id', props.customer.id)}
            <TextField label="first name" variant="outlined" {...register("firstName", { required: true })} defaultValue={props.customer.firstName} />
            <TextField label="last name" variant="outlined" {...register("lastName", { required: true })} defaultValue={props.customer.lastName} />
            <TextField label="email" type="email" variant="outlined" defaultValue={props.customer.email} {...register("email", { required: true })} required />
            {/* <TextField label="password" type="password" variant="outlined" {...register("password")} /> */}
            {setValue('coupons', props.customer.coupons)}
            <Button type="submit" color="primary">Send</Button>
        </form>
    );
}

export default UpdateCustomerForm;
