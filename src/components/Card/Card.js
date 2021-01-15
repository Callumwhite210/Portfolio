import React from 'react';

import Cardinfo from '../CardInfo/CardInfo';
function Card(props){

    return(
       <div className="d-inline-block my-card" onClick={(e) => props.click(props.item)}>
           <img className="my-card-img" src={props.item.imgSrc} alt={props.item.imgSrc} />
           { props.item.selected && <Cardinfo title ={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
       </div>
    )
}

export default Card;