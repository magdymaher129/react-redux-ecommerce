import React from 'react'

export default function ProductsItems(props) {
  return (
    <>
 <div className="col    product     key={props.id}">
        <div className="card m-1" style={{width: "18rem",height:'500px'}}>
  <img src={props.image} className="card-img-top my-4 mx-4 " alt={props.title}style={{width: "16rem",height:"250px"}}/>
  <div className="card-body ">
    <h5 className="card-title">{props.title.substring(0,22)}</h5>
    <h5 className="card-title">price: $ {props.price}</h5>
    <p className="card-text">{props.desc.substring(0,40)}</p>
    <a href="ss" className="btn btn-outline-dark mb-2 mx-5 " >Buy Now</a>
  </div>
</div>
           
        </div>

    </>
  )
}
