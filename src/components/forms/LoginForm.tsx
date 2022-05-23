import { Button, Grid, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Notyf } from "notyf";
import { SyntheticEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { LoginAxios } from "../../axios";
import { Role, RoleValues } from "../../model/Role";
import { UserCred } from "../../model/UserCred";
import { Login } from "../../redux/selector";
import { theme } from "../../theme";
import notify from "../../utils/Notify";
import SingleCard from "../items/SingleCard";

const UseStyles = makeStyles({
    inputField: {
        marginTop: theme.spacing(1)
    },
})



function LoginForm(): JSX.Element {
    const { register, setValue, handleSubmit } = useForm<UserCred>();
    const [role, setRole] = useState<Role>(Role.GUEST);
    const history = useHistory();

    const classes = UseStyles();


    const onSubmit: SubmitHandler<UserCred> = (data) => {
        LoginAxios.Login(data)
            .then(res => {
                Login(data.role, res.headers["authorization"])
                history.goBack()
                notify.success("Welcome")
            })
            .catch(err => {
                notify.error(err.response.data)
            })

    }

    const handleRole = (args: SyntheticEvent) => {
        const value = (args.target as HTMLInputElement).value;
        setRole(RoleValues[Number(value)])
        setValue("role", RoleValues[Number(value)])
    }

    return (
        <Grid container>
            <Grid item md={2} xl={3} />
            <Grid item xs={12} md={8} xl={6}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <SingleCard title={"Login"} content={
                        <div>

                            <Typography
                                variant="subtitle1"
                                align="center"
                                sx={{ marginBottom: theme.spacing(3) }}
                            >
                                Found Coupon you would like to purchase?
                                <br />
                                Sign in as a customer and enjoy of all our discounts.
                                <br /> <br />
                                Have your own Company?
                                <br />
                                Sign in as a company and start adding and managing your coupons.
                            </Typography>


                            <TextField fullWidth label="email" type="email" variant="outlined" {...register("email", { required: true })} required sx={{ marginTop: theme.spacing(1) }} />
                            <TextField fullWidth label="password" type="password" variant="outlined" {...register("password", { required: true })} required sx={{ marginTop: theme.spacing(1) }} />
                            <div className={classes.inputField}  {...register("role")}>
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

                                <Button fullWidth sx={{ marginBlock: theme.spacing(2) }} type="submit" variant="contained" color="primary">Send</Button>
                            </div>
                        </div>
                    } />
                </form>
            </Grid>
            <Grid item md={2} xl={3} />
        </Grid>

    );
}

export default LoginForm;
