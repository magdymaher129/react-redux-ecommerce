
import '../App.css'
import{NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Navbar() {
  const { cartItem, qty} = useSelector((state) => state.update);

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light pink '>
        <div className='container '>
          <NavLink className='navbar-brand  fw-bolder fs-3' to='/'>
            FAMILY COLLECTION
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2  mb-lg-0 py-4 '>
              <li className='nav-item mx-1'>
                <NavLink
                  className='nav-link active  fs-5 text-light fw-bold'
                  aria-current='page'
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item mx-1 '>
                <NavLink className='nav-link  fs-5  text-light fw-bold' to='/Products'>
                  Products
                </NavLink>
              </li>
              <li className='nav-item mx-1'>
                <NavLink className='nav-link  fs-5 text-light fw-bold' to='/about'>
                  Abouts
                </NavLink>
              </li>
              <li className='nav-item mx-1'>
                <NavLink className='nav-link  fs-5  text-light fw-bold' to='/Contacts'>
                  Contacts
                </NavLink>
              </li>
             

            </ul>
            <div className='buttons btx '>
              <NavLink to='/login' className='btn  btn-outline-dark  m-1 fw-bold'>
                <i className='fa fa-sign-in me-1' aria-hidden='true'></i>Login
              </NavLink>
              <NavLink to='/register' className='btn  btn-outline-dark m-1 fw-bold'>
                <i className='fa fa-user-plus' aria-hidden='true'></i>Register
              </NavLink>
              <NavLink to='/cart' className='btn  btn-dark m-1 fw-bold'>
                <i className='fa fa-shopping-cart' aria-hidden='true'></i>cart({qty})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
