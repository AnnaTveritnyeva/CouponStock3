import { alpha, Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { GetCompanies, GetCustomers } from "../../../redux/selector";
import UserPageHeader from "./UserPageHeader";
import CompanyTable from "./admin/CompanyTable";
import CustomerTable from "./admin/CustomerTable";
import { theme } from "../../../theme";

enum TabOptions {
    CUSTOMERS = "Customers",
    COMPANIES = "Companies"
}

function UserPageAdmin(): JSX.Element {
    const [value, setValue] = useState<TabOptions>(TabOptions.CUSTOMERS);

    const handleTableChange = (event: SyntheticEvent, newValue: TabOptions) => {
        setValue(newValue);
    };

    function ShowTable() {
        switch (value) {
            case TabOptions.CUSTOMERS:
                return <CustomerTable />;
            case TabOptions.COMPANIES:
                return <CompanyTable />;
        }
    }

    return (
        <div>
            <UserPageHeader
                name={"Admin"}
                text={value === TabOptions.CUSTOMERS ?
                    "Total customers: " + GetCustomers().length :
                    " Total companies: " + GetCompanies().length}
                userPage={true}
            />

            <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: alpha(theme.palette.common.white, 0.8) }}>
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