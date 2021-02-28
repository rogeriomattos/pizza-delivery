import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
    return (
        <div className="actions">
            <Link to={props.backLink}>
                <button>Voltar</button>
            </Link>
            {!props.disableNext && 
            <Link to={props.nextLink}>
                <button>
                    <span>{props.nextText}</span> 
                    <FiArrowRight/>
                </button>
            </Link>
            }
            {props.disableNext && 
                <button disabled={props.disableNext}>
                    <span>{props.nextText}</span> 
                    <FiArrowRight/>
                </button>
            }
        </div>
    );
};

export default StepActions;