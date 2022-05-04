import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Company from '../../model/Company';
import { GetCompanies } from '../../redux/selector';
import UpdateCompanyForm from '../forms/UpdateCompanyForm';
import Page404 from './Page404';

function CompanyPage(): JSX.Element {
    //maybe theres a better and faster way to do that
    const myCompany = useLocation().state as Company;
    //see if we need the exists
    const exists: Boolean = GetCompanies().some(company => company === myCompany);

    if (typeof (myCompany) !== undefined) {
        return (
            <div>
                <h4>{myCompany.name} Page</h4>
                <UpdateCompanyForm company={myCompany}/>
            </div>
        )
    }
    else {
        return <Redirect exact to="/companyNotFound">
            {console.log(exists)}
            <Page404 />
        </Redirect>
    }

}

export default CompanyPage;