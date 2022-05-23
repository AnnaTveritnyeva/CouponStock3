import { alpha, Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { GetCompanies, GetCustomers} from "../../../redux/selector";
import UserPageHeader from "./UserPageHeader";
import makeStyles from "@mui/styles/makeStyles";
import CompanyTable from "./admin/CompanyTable";
import CustomerTable from "./admin/CustomerTable";
import { theme } from "../../../theme";

enum TabOptions {
    CUSTOMERS = "Customers",
    COMPANIES = "Companies"
}

const UseStyles = makeStyles({

});

function UserPageAdmin(): JSX.Element {
    const classes = UseStyles();
    const [value, setValue] = useState<TabOptions>(TabOptions.CUSTOMERS);

    const handleTableChange = (event: SyntheticEvent, newValue: TabOptions) => {
        setValue(newValue);
    };

    function ShowTable() {
        switch (value) {
            case TabOptions.CUSTOMERS:
                return <CustomerTable/>;
            case TabOptions.COMPANIES:
                return <CompanyTable/>;
        }
    }

    return (
        <div>
            <UserPageHeader name={"Admin"} text={"Total customers in system: " + GetCustomers().length +
                " Total compnies in the system:" + GetCompanies().length} />

            <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor:alpha(theme.palette.common.white, 0.8)}}>
                <Tabs 
                value={value} 
                onChange={handleTableChange} 
                variant="fullWidth"
                >
                    <Tab value={TabOptions.CUSTOMERS} label={TabOptions.CUSTOMERS} />
                    <Tab value={TabOptions.COMPANIES} label={TabOptions.COMPANIES} />
                </Tabs>
            </Box>
            {ShowTable()}
        </div>

    )
}

export default UserPageAdmin;