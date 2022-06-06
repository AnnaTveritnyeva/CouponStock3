
import { Divider, MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";
import { CategoryValue } from "../../../model/Category";
import Company from "../../../model/Company";
import { Role } from "../../../model/Role";
import { GetCompanies, getUserRole, Logout } from "../../../redux/selector";


interface MenuOptionProps {
    option: any;
}
export function CategoriesMenu() {
    const history = useHistory();
    return <div >
        {CategoryValue.map(category =>
            <MenuItem key={category}
                sx={{ borderRadius: '15px', }}
                onClick={() => history.push({ pathname: "/category/:" + category, state: category })}>
                {category}
            </MenuItem>
        )}
    </div>
}

export function CopmaniesMenu() {
    let history = useHistory();
    const handleClick = (company: Company) => {
        history.push({ pathname: '/company/:' + company.name, state: company })
    }

    return <div >
        {GetCompanies().map(company =>
            <span key={company.id}>
                <MenuItem
                    sx={{ borderRadius: '15px', }}
                    onClick={() => handleClick(company)}
                >
                    {company.name}
                </MenuItem>
            </span>
        )}
    </div>
}

export function UserMenu() {
    const history = useHistory();
    if (getUserRole() !== Role.GUEST) {
        return <div >
            <Divider />
            <MenuItem
                onClick={() => history.push("/user")}
                sx={{ borderRadius: '15px', }}
            >
                Account
            </MenuItem>
            <MenuItem onClick={() => {
                Logout()
                history.push("/home")
            }}
                sx={{ borderRadius: '15px', }}
            >
                Logout
            </MenuItem>

        </div>
    }
    else {
        return <MenuItem onClick={() => history.push("/login")}>
            Login
        </MenuItem>
    }
}

function MenuComponents(props: MenuOptionProps): JSX.Element {
    const optionSwitch = () => {
        switch (props.option) {
            case "Categories":
                return CategoriesMenu();
            case "Stores":
                return CopmaniesMenu();
        }
    }
    return (
        <div>
            {optionSwitch()}
        </div>
    );
}

export default MenuComponents;
