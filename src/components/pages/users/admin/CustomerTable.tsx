import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useState } from "react";
import { AdminAxios } from "../../../../axios";
import Customer from "../../../../model/Customer";
import { DeleteCustomer, GetCustomers } from "../../../../redux/selector";
import { theme } from "../../../../theme";
import notify from "../../../../utils/Notify";
import AddCustomerForm from "../../../forms/AddCustomerForm";
import UpdateCustomerForm from "../../../forms/UpdateCustomerForm";
import MyModal from "../../../items/MyModal";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';

const UseStyles = makeStyles({
    tableButtons: {
        display: 'flex',
        flexDirection: 'column',
    },
    addCustomer: {
        display: 'flex',
        justifyContent: 'end',
        marginBlock: theme.spacing(3)
    }
});


function CustomerTable(): JSX.Element {
    const classes = UseStyles();
    const [customers, setCustomers] = useState<Customer[]>(GetCustomers());
    const [addCustomerOpen, setAddCustomerOpen] = useState<boolean>(false);
    const [updateCustomerOpen, setUpdateCustomerOpen] = useState<boolean>(false);
    const [customerToUpdate, setCustomerToUpdate] = useState<Customer>(new Customer())
    const columns = ["Full name", "email", "coupons purchased", ""]

    const deleteCustomer = (customerId: number) => {
        AdminAxios.deleteCustomer(customerId)
            .then(() => {
                DeleteCustomer(customerId)
                notify.success("successfully deleted")
                setCustomers(GetCustomers())
            })
            .catch(err => { notify.error(err.response.data) })
    }

    return (
        <div>
            <div className={classes.addCustomer}>
                <Button
                    onClick={() => setAddCustomerOpen(true)}
                    startIcon={<PersonAddAltRoundedIcon fontSize="large" />}
                    size="large"
                    sx={{
                        fontFamily: 'Kanit',
                        color: theme.palette.secondary.dark,
                        "&:hover": {
                            bgcolor: theme.palette.secondary.dark,
                            color: theme.palette.primary.contrastText
                        }
                    }}
                >
                    <Typography variant='subtitle1' fontWeight={theme.typography.fontWeightMedium}>
                        add customer
                    </Typography>
                </Button>
            </div>

            <Table sx={{ bgcolor: theme.palette.primary.contrastText }}>
                <TableHead>
                    <TableRow sx={{ bgcolor: theme.palette.primary.main, borderBottom: theme.shadows }}>
                        {columns.map(
                            column =>
                                <TableCell align="center">
                                    <Typography variant="h6"> {column} </Typography>
                                </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(customer =>
                        <TableRow key={customer.id}>
                            <TableCell align="center">
                                <Typography> {customer.firstName} {customer.lastName} </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography> {customer.email} </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography >{customer.coupons?.length}</Typography>
                            </TableCell>
                            <TableCell className={classes.tableButtons} align="center">
                                <Button
                                    fullWidth
                                    onClick={() => {
                                        setUpdateCustomerOpen(true)
                                        setCustomerToUpdate(customer)
                                    }}
                                >
                                    update
                                </Button>
                                <Button
                                    fullWidth
                                    onClick={() => deleteCustomer(customer.id as number)}
                                >
                                    delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <MyModal
                open={addCustomerOpen}
                close={() => setAddCustomerOpen(false)}
                content={<AddCustomerForm />}
            />
            <MyModal
                open={updateCustomerOpen}
                close={() => setUpdateCustomerOpen(false)}
                content={<UpdateCustomerForm customer={customerToUpdate} />}
            />

        </div>

    )
}

export default CustomerTable;