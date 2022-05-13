import { Button, TextField } from "@mui/material";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminAxios } from "../../axios";
import Customer from "../../model/Customer";
import { AddCustomer } from "../../redux/selector";
import notify from "../../utils/Notify";

function AddCustomerForm(): JSX.Element {
    const { register, handleSubmit } = useForm<Customer>();

    const onSubmit: SubmitHandler<Customer> = (data) => {
        AdminAxios.addCustomer(data)
            .then(() => {
                AddCustomer(data)
                notify.success("added Customer")
            })
            .catch(err => notify.error(err.response.data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="firstName" variant="outlined" {...register("firstName", { required: true })} required />
            <TextField label="LastName" variant="outlined" {...register("lastName", { required: true })} required />
            <TextField label="email" type="email" variant="outlined" {...register("email", { required: true })} required />
            {/* <TextField label="password" type="password" variant="outlined" {...register("password", { required: true })} required /> */}
            <Button type="submit" color="primary">Send</Button>
        </form>
    );
}

export default AddCustomerForm;
