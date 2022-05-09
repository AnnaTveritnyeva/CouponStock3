import { Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginAxios } from "../../axios";
import { Role, RoleValues } from "../../model/Role";
import { UserCred } from "../../model/UserCred";
import { Login } from "../../redux/selector";


function LoginForm(): JSX.Element {
    const { register, setValue, handleSubmit } = useForm<UserCred>();
    const [role, setRole] = useState<Role>(Role.GUEST);

    const onSubmit: SubmitHandler<UserCred> = (data) => {
        LoginAxios.Login(data)
            .then(res => Login(data.role, res.headers["authorization"]))
            .catch(err => {
                console.log(err)
            })
    }

    const handleRole = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        setRole(RoleValues[Number(value)])
        setValue("role", RoleValues[Number(value)])
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <TextField  fullWidth label="email" type="email" variant="outlined" {...register("email", { required: true })} required />
            <TextField fullWidth label="password" type="password" variant="outlined" {...register("password", { required: true })} required />
            <div {...register("role")}>
                <ToggleButtonGroup
                    fullWidth
                    value={role}
                    exclusive={true}
                    onChange={handleRole}
                    defaultValue={1}
                    color="secondary"
                >
                    <ToggleButton value={3} aria-label="3" selected={role === RoleValues[3]}>
                        {Role.ADMIN}
                    </ToggleButton>
                    <ToggleButton value={2} aria-label="2" selected={role === RoleValues[2]}>
                        {Role.COMPANY}
                    </ToggleButton>
                    <ToggleButton value={1} aria-label="1" selected={role === RoleValues[1]}>
                        {Role.CUSTOMER}
                    </ToggleButton>
                </ToggleButtonGroup>

                <Button type="submit" color="primary">Send</Button>
            </div>
        </form>
    );
}

export default LoginForm;
