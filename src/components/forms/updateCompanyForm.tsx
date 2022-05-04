import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { AdminAxios } from "../../axios";
import Company from "../../model/Company";
import { updateCompany } from "../../redux/actions/GuestActions";
import store from "../../redux/store";


interface UpdateCompanyProps {
    company: Company;
}

function UpdateCompanyForm(props: UpdateCompanyProps): JSX.Element {
    const { register, setValue, handleSubmit } = useForm<Company>();

    const onSubmit: SubmitHandler<Company> = (data) => {
        if (data.password === "") {
            data.password = props.company.password;
        }
        console.log(data)
        AdminAxios.updateCompany(data)
            .then(() => {
                console.log("company updated")
                store.dispatch(updateCompany(data))
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField label="name" variant="outlined" {...register("name", { required: true })} defaultValue={props.company.name} InputProps={{ readOnly: true }} />
            <TextField label="email" type="email" variant="outlined" defaultValue={props.company.email} {...register("email", { required: true })} required />
            <TextField label="password" type="password" variant="outlined" {...register("password")} />
            <TextField label="image" type="url" variant="outlined" defaultValue={props.company.image}{...register("image", { required: true })} required />
            {setValue('id', props.company.id)}
            {setValue('coupons', props.company.coupons)}
            <Button type="submit" color="primary">Send</Button>
        </form>
    );
}

export default UpdateCompanyForm;
