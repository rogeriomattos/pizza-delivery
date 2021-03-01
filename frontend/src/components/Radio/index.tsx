import React from 'react';
import './styles.css';

interface RadioProps {
    name: string;
    title: string;
    description?:string;
    data: any;
    onClick: (data:any) => void;
    checked?: boolean;
}

const Radio: React.FC<RadioProps> = (props) =>{
    return(
        <div className="radio">
            <label>
                <input checked={props.checked} onClick={(ev)=> {props.onClick(props.data);}} type="radio" name={props.name}/>
                <div className="content">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </label>
        </div>
    )
};

export default Radio;