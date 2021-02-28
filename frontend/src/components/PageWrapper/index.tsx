import React from 'react';
import './styles.css';
import Footer from '../Footer';
import Header from '../Header';

interface PageWrapperProps {}

const PageWrapper: React.FC<PageWrapperProps> = (props) => {
    return(
        <div className={'page-wrapper'}>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
};

export default PageWrapper;