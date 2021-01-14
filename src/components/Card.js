import React from "react";
import { NavLink } from "react-router-dom";
import v from "../images/v.png"

const Card = (props) => {
  return (
    <>
    
      <div className="grid__item">
      {/* <NavLink className="navl" exact to={props.data.link}> */}
        <div className="card"><img className="card__img" src={props.data.imgsrc} alt="Gaming Room" />
            <div className="card__content">
                <h1 className="card__header">{props.data.title}</h1>
                <p className="card__text">{props.data.subtitle}</p>
                <div className="prof">
                <img height="40px" src={v} alt="img" />
                <p className="readmin">{props.data.time}</p>
                </div>
                <NavLink className="card__btn" exact to={props.data.link}>Explore<span>&rarr;</span></NavLink>
            </div>
        </div>
        {/* </NavLink> */}
    </div>
    
    </>
  );
};
 
export default Card;