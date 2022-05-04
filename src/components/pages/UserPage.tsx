import React from 'react';
import { NavLink } from 'react-router-dom';
import { GetCompanies } from '../../redux/selector';
import AddCompanyForm from '../forms/AddCompanyForm';
import LoginForm from '../forms/LoginForm';

function UserPage ():JSX.Element{
return(
    <div>
        <LoginForm/>
        <br/>
        <AddCompanyForm/>
        <NavLink exact to = "/home">
            Home
        </NavLink>
       {GetCompanies().map(company=>
           <div key={company.id}>{company.name} <br/> </div>
       )}
    </div>
)
}

export default UserPage ;