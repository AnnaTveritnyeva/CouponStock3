import { Box, Button, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { DeleteCompany, GetCompanies, GetCustomers } from "../../../redux/selector";
import { theme } from "../../../theme";
import AddCompanyForm from "../../forms/AddCompanyForm";
import UpdateCompanyForm from "../../forms/UpdateCompanyForm";
import { AdminAxios } from "../../../axios";
import Customer from "../../../model/Customer";
import Company from "../../../model/Company";
import MyModal from "../../items/MyModal";
import notify from "../../../utils/Notify";


enum TabOptions {
    CUSTOMERS = "Customers",
    COMPANIES = "Companies"
}

enum AdminActions {
    UPDATE_COMPANY,
    UPDATE_CUSTOMER,
    ADD_COMPANY,
    ADD_CUSTOMER
}


function UserPageAdmin(): JSX.Element {
    const [customers, setCustomers] = useState<Customer[]>(GetCustomers());
    const [companies, setCompanies] = useState<Company[]>(GetCompanies());
    const [addCompanyOpen, setAddCompanyOpen] = useState<boolean>(false);
    const [updateCompanyOpen, setUpdateCompnayOpen] = useState<boolean>(false);
    const [companyToUpdate, setCompanyToUpdate] = useState<Company>(new Company())

    const openAddCompany = () => {
        setAddCompanyOpen(true)
    }

    const closeAddCompany = () => {
        setAddCompanyOpen(false)
    }


    const openUpdateCompany = (company: Company) => {
        setCompanyToUpdate(company)
        setUpdateCompnayOpen(true)

    }

    const closeUpdateCompany = () => {
        setUpdateCompnayOpen(false)
    }

    const [value, setValue] = useState<TabOptions>(TabOptions.CUSTOMERS);

    const handleChange = (event: SyntheticEvent, newValue: TabOptions) => {
        setValue(newValue);
    };

    const deleteCompany = (companyId: number) => {
        AdminAxios.deleteCompany(companyId)
            .then(() => {
                DeleteCompany(companyId)
                notify.success("successfully deleted")
                setCompanies(GetCompanies())
            }
            )
            .catch(err => { notify.error(err.response.data) })
    }



    function Customers() {
        return <Table sx={{ bgcolor: theme.palette.primary.contrastText }}>
            <TableHead>
                <TableRow>

                </TableRow>
            </TableHead>
            <TableBody>
                {customers.map(customer =>
                    <TableRow key={customer.id}>
                        <TableCell align="center">
                            <Typography>
                                {customer.firstName} {customer.lastName}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography>
                                {customer.email}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography >
                                {customer.coupons?.length}
                            </Typography>
                        </TableCell>

                    </TableRow>
                )}
            </TableBody>
        </Table>
    }

    function Companies() {
        return <Table sx={{ bgcolor: theme.palette.primary.contrastText }}>

            <TableHead>
                <TableRow>

                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Button onClick={openAddCompany}>
                            add
                        </Button>
                    </TableCell>
                </TableRow>

                {companies.map(company =>

                    <TableRow key={company.id}>
                        <TableCell align="center">
                            <img src={company.image} height="100px" width="100px" />
                        </TableCell>
                        <TableCell >
                            <Typography>
                                {company.name}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography >
                                {company.email}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography >
                                {company.coupons.length}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Button onClick={() => openUpdateCompany(company)}
                            >
                                update
                            </Button>
                        </TableCell>
                        <TableCell align="center">
                            <Button onClick={() => deleteCompany(company.id as number)}>
                                delete
                            </Button>
                        </TableCell>
                    </TableRow>

                )}
            </TableBody>
        </Table>
    }

    function ShowTable() {
        switch (value) {
            case TabOptions.CUSTOMERS:
                return Customers();
            case TabOptions.COMPANIES:
                return Companies();
        }
    }

    return (
        <div>
            UserPageAdmin
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab value={TabOptions.CUSTOMERS} label={TabOptions.CUSTOMERS} />
                    <Tab value={TabOptions.COMPANIES} label={TabOptions.COMPANIES} />
                </Tabs>
            </Box>

            {ShowTable()}



            <MyModal open={addCompanyOpen} close={closeAddCompany} content={<AddCompanyForm />} />
            <MyModal open={updateCompanyOpen} close={closeUpdateCompany} content={<UpdateCompanyForm company={companyToUpdate} />} />

        </div>

    )
}

export default UserPageAdmin;