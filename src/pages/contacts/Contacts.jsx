import React from 'react';
import {ClassicContainer} from "@widgets/api";
import Introduction from "./introduction/Introduction";

const Contacts = () => {
    return (
        <main>
            <ClassicContainer>
                <Introduction/>
            </ClassicContainer>
        </main>
    );
};

export default Contacts;