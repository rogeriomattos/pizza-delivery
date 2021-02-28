import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import IOrder from '../../entites/IOrder';
import './styles.css';

interface StepActionsProps {
    backLink: string;
    nextLink: string;
    order: IOrder;
    nextText: string;
    disableNext: boolean;
}

const StepActions: React.FC<StepActionsProps> = (props) => {
    const history = useHistory();

    const nextStep = () => {
        history.push(props.nextLink, { order: props.order });
    };
    return (
        <div className="actions">
            <Link to={props.backLink}>
                <button>Voltar</button>
            </Link>
            
            <button onClick={nextStep} disabled={props.disableNext}>
                <span>{props.nextText}</span> 
                <FiArrowRight/>
            </button>
            
        </div>
    );
};

export default StepActions;