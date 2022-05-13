
import { Divider, MenuItem, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import { CategoryValue } from "../../../model/Category";
import Company from "../../../model/Company";
import { Role } from "../../../model/Role";
import { GetCompanies, getUserRole, Logout } from "../../../redux/selector";
import CompanyPage from "../../pages/CompanyPage";

interface MenuOptionProps{
option:any;
}
export function CategoriesMenu(){
    
    const history = useHistory();
    return <div >
    <Typography variant="h5">
        Categories:
    </Typography>
    <Divider/>
    {CategoryValue.map(category =>
        <MenuItem key={category}  onClick={()=> history.push({pathname: "/category/:" + category, state: category })}>
            {category}
        </MenuItem>
    )}
     <Divider/>
</div>
}

export function CopmaniesMenu(){
    let history = useHistory();
    const [change, setChange] = useState (0);

    
   

const handleClick = (company:Company) => {
    history.push({pathname: '/company/:' + company.name, state: company})

    setChange(1)
}

    return <div >
    <Typography>
        Companies:
    </Typography>
    <Divider/>
    {GetCompanies().map(company =>
    <span key={company.id}>
       
        <MenuItem 
      // LinkComponent={<Link to="/profile" />}
        onClick={()=>  handleClick(company)}
        >
            {company.name}
        </MenuItem>
       
        </span>
    )}
</div>
}

export function UserMenu(){
    const history = useHistory();
    if (getUserRole() !== Role.GUEST){
    return <div >
    <Divider/>
        <MenuItem onClick={()=> Logout()} >
            Logout
        </MenuItem>
        <MenuItem onClick={()=> history.push("/user")}>
           myPage
        </MenuItem>   
</div>
}
else{
    return <span></span>
}
}

function SideBar(props:MenuOptionProps): JSX.Element {
const optionSwitch = () => {
    switch (props.option){
        case "Categories":
            return CategoriesMenu();
        case "Stores":
            return CopmaniesMenu();
    }
}

    return (
        <div className="SideBar">
            {optionSwitch()}
        </div>
    );
}

export default SideBar;
