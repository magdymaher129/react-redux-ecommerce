import React from 'react'

export default function ProductsItems(props) {
  return (
    <>
 <div className=" col-md-3 product m-2 key={props.id}">
        <div className="card " style={{width: "18rem",height:'500px'}}>
  <img src={props.image} className="card-img-top mt-2" alt={props.title}style={{width: "18rem",height:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title">{props.title.substring(0,22)}</h5>
    <h5 className="card-title">price: $ {props.price}</h5>
    <p className="card-text">{props.desc.substring(0,60)}</p>
    <a href="ss" className="btn btn-outline-dark mb-1 mx-5 " >Add To Cart</a>
  </div>
</div>
           
        </div>

    </>
  )
}
