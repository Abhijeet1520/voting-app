import React from 'react';
//import firebase from 'context/firebase';
import { PageLayout, LoginPage } from 'components/common';

const VoterPage = () => {
    return (
        <PageLayout>
            <LoginPage modalType='admin'/>
        </PageLayout>
    )
}

export { VoterPage };