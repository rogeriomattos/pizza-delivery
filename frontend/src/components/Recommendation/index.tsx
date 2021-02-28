import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

interface RecommendationProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLinkTo: string;
    data?: any; 
}

const Recommendation: React.FC<RecommendationProps> = (props) => {
    
    const history = useHistory();
    
    const goToPage = () => {
        if(props.data)
            history.push(props.buttonLinkTo, props.data);
        else
            history.push(props.buttonLinkTo);

    };
    
    return(
        <div className="recommendation">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={goToPage}>{props.buttonText}</button>
        </div>
    );
};

export default Recommendation;