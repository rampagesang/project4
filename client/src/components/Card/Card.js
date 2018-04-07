import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import "./Card.css";

const Card = props => (

        <div className="card" style={{width: 250}}>
            <h3 className="card-header text-center">
            {props.title}
            </h3>
            <p>6th Grade: {props.g6}</p>
            <p>7th Grade: {props.g7}</p>
            <p>8th Grade: {props.g8}</p>
            <p>Char Counts: {props.cc}</p>
            {props.children}
        </div>

)


export default Card;
