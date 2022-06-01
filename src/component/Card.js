import shop from "../assets/shop.jpg";
import "../App.css";
export default function Card() {
  return (
    <div className='hero'>
      <div class='card  text-white '>
        <img
          src={shop}
          class='card-image '
          alt='title'
          height='650px'
          width='100%'
        />
        <div class='card-img-overlay d-flex flex-column justify-content-space'>
    <div class='container text-danger  '>

          <h5 class='card-title display-2 fw-bolder mb-0  '>NEW Brands </h5>
          <p class='card-text lead fs-2 text-dark fw-bold'>
           CHECK ALL  NEW PRODUCTS
          </p>
          <p class='card-text  text-dark fw-bold'>Last updated 3 mins ago</p>
        </div>
    </div>

      </div>
    </div>
  );
}
