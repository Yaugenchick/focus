import './scss/contacts.scss';

import React, {Fragment} from 'react';

import { ContactsNetworks } from './contactsNetworks';
import { ContactsOffice } from './contactsOffice';
import { ContactsTime } from './contactsTime';

export const Contacts = () => {
    return(
        <Fragment>
            <div className="contacts">
                <div className="container">
                    <div className="contacts-wraper">
                        <ContactsNetworks/>
                        <ContactsOffice/>
                        <ContactsTime/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}