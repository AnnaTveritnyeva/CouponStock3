import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminAxios } from "../../axios";
import Company from "../../model/Company";
import { AddCompany } from "../../redux/selector";

function AddCompanyForm(): JSX.Element {
    const { register, handleSubmit } = useForm<Company>();

    const onSubmit: SubmitHandler<Company> = (data) => {
        AdminAxios.addCompany(data)
            .then(() => {
                //check if better to use contex 
                AddCompany(data)
                console.log("added Company")})
            .catch(err => console.log(err))       
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="name" variant="outlined" {...register("name", { required: true })} required />
            <TextField label="email" type="email" variant="outlined" {...register("email", { required: true })} required />
            <TextField label="password" type="password" variant="outlined" {...register("password", { required: true })} required />
            <TextField label="image" type="url" variant="outlined" {...register("image", { required: true })} required />
            <Button type="submit" color="primary">Send</Button>
        </form>
    );
}

export default AddCompanyForm;