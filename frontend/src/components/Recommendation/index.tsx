import React from 'react';
import './styles.css';

interface RecommendationProps {
    title: string;
    description: string;
    buttonText: string;
}

const Recommendation: React.FC<RecommendationProps> = (props) => {
    return(
        <div className="recommendation">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button>{props.buttonText}</button>
        </div>
    );
};

export default Recommendation;