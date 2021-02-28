import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

interface RecommendationProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLinkTo: string; 
}

const Recommendation: React.FC<RecommendationProps> = (props) => {
    return(
        <div className="recommendation">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Link to={props.buttonLinkTo}>
                <button>{props.buttonText}</button>
            </Link>
        </div>
    );
};

export default Recommendation;