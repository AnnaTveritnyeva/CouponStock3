import { useEffect, useState } from 'react';
import { AdminAxios, CompanyAxios, CustomerAxios } from '../../axios';
import Company from '../../model/Company';
import Customer from '../../model/Customer';
import { Role } from '../../model/Role';
import { getUserRole, UpdateAllCustomers } from '../../redux/selector';
import store from '../../redux/store';
import LoginForm from '../forms/LoginForm';
import UserPageAdmin from './users/UserPageAdmin';
import UserPageCompany from './users/UserPageCompany';
import UserPageCustomer from './users/UserPageCustomer';

function UserPage(): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<Customer | Company | null>(null);

    const getUserData = () => {
        switch (getUserRole()) {
            case Role.ADMIN:
                AdminAxios.getAllCustomers()
                    .then(res => {
                        UpdateAllCustomers(res.data)
                        setUser(null)
                        setLoading(false)
                    }).catch(err => { console.log(err) })
                break;
            case Role.CUSTOMER:
                CustomerAxios.getCustomerDetails()
                    .then(res => {
                        setUser(res.data)
                        setLoading(false)
                    }).catch(err => { console.log(err) })
                break;
            case Role.COMPANY:
                CompanyAxios.getCompanyDetails()
                    .then(res => {
                        setUser(res.data)
                        
                    }).catch(err => { console.log(err) })
                break;
        }
    }
 

    useEffect(() => {
        getUserData();
    }, [])

    switch (store.getState().user.role) {
        case Role.ADMIN:
            return <UserPageAdmin />
        case Role.COMPANY:
            return <UserPageCompany company={user as Company} />
        case Role.CUSTOMER:
            return <UserPageCustomer customer={user as Customer} /> 
        default:
            //see what else we can do 
            return <LoginForm />
    }

}

export default UserPage;