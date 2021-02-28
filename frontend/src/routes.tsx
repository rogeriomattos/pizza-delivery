import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ConfirmOrder from './pages/ConfirmOrder';
import Address from './pages/Address';
import Flavors from './pages/Flavors';
import Doughs from './pages/Doughs';
import Sizes from './pages/Sizes';
import PageWrapper from './components/PageWrapper';

const Routes = () => {
    return(
        <BrowserRouter>
            <PageWrapper>
                <Route component={Home} path="/" exact/>
                <Route component={ConfirmOrder} path="/ConfirmOrder" />
                <Route component={Address} path="/Address" />
                <Route component={Flavors} path="/Flavors" />
                <Route component={Doughs} path="/Doughs" />
                <Route component={Sizes} path="/Sizes" />
            </PageWrapper>
        </BrowserRouter>
    );
}

export default Routes;