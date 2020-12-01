import React from 'react';
//import firebase from 'context/firebase';
import { PageLayout} from 'components/common';
import { LoginPage } from 'components/common/LoginPage';

const AdminPage = () => {
    return (
        <PageLayout>
            <LoginPage />
        </PageLayout>
    )
}

export { AdminPage };