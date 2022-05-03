import { Button, TextField } from "@mui/material";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Customer from "../../model/Customer";

function AddCustomerForm(): JSX.Element {
    const { register, handleSubmit } = useForm<Customer>();

    const onSubmit: SubmitHandler<Customer> = (data) => {
        console.log(data)
        // axios.post("http://localhost:8080/admin/addCustomer", 
        //  data,
        //  {headers: {'Autorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6ImFkbWluIiwicm9sZSI6IkFETUlOIiwic3ViIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjUxNTE0MTQ2LCJleHAiOjE2NTE1MTU5NDZ9.CoxmJjpq8CI8Pyy3IDb7vO-pkmDMHBlOXK-xmgB4gpY'}}
        // )
        // .then(res=> console.log(res))
        // .catch(err=> {})

       // AdminAxios.addCustomer(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="firstName" variant="outlined" {...register("firstName", { required: true })} required />
            <TextField label="LastName" variant="outlined" {...register("lastName", { required: true })} required />
            <TextField label="email" type="email" variant="outlined" {...register("email", { required: true })} required />
            <TextField label="password" type="password" variant="outlined" {...register("password", { required: true })} required />
            <Button type="submit" color="primary">Send</Button>
        </form>
    );
}

export default AddCustomerForm;
