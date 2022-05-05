import React from 'react';
import { Role } from '../../model/Role';
import store from '../../redux/store';
import LoginForm from '../forms/LoginForm';
import UserPageAdmin from './users/UserPageAdmin';
import UserPageCompany from './users/UserPageCompany';
import UserPageCustomer from './users/UserPageCustomer';

function UserPage(): JSX.Element {

    switch (store.getState().user.role) {
        case Role.ADMIN:
            return <UserPageAdmin />
        case Role.COMPANY:
            return <UserPageCompany />
        case Role.CUSTOMER:
            return <UserPageCustomer />
        default:
            //see what else we can do 
            return <LoginForm />
    }

}

export default UserPage;