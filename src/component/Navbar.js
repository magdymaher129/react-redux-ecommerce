
import '../App.css'
export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light pink '>
        <div className='container '>
          <a className='navbar-brand  fw-bolder fs-3' href='#'>
            FAMILY COLLECTION
          </a>
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
                <a
                  className='nav-link active  fs-5 text-light fw-bold'
                  aria-current='page'
                  href='#'
                >
                  Home
                </a>
              </li>
              <li className='nav-item mx-1 '>
                <a className='nav-link  fs-5  text-light fw-bold' href='#'>
                  Products
                </a>
              </li>
              <li className='nav-item mx-1'>
                <a className='nav-link  fs-5 text-light fw-bold' href='#'>
                  Abouts
                </a>
              </li>
              <li className='nav-item mx-1'>
                <a className='nav-link  fs-5  text-light fw-bold' href='#'>
                  Contacts
                </a>
              </li>
             

            </ul>
            <div className='buttons btx '>
              <a href='#' className='btn btn btn-outline-dark  m-1 fw-bold'>
                <i class='fa fa-sign-in me-1' aria-hidden='true'></i>Login
              </a>
              <a href='' className='btn btn btn-outline-dark m-1 fw-bold'>
                <i class='fa fa-user-plus' aria-hidden='true'></i>Register
              </a>
              <a href='' className='btn btn btn-dark m-1 fw-bold'>
                <i class='fa fa-shopping-cart' aria-hidden='true'></i>cart(0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
