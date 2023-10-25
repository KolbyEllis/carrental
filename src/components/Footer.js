import React from 'react';

function Footer() {
  return (
    <section>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='row'>
            <div className='col-md-3'>
              <ul>
                <li className='list-atrributes'>
                  <h4>Car Rental</h4>
                </li>
                <li className='list-atrributes'>
                  <p className='list-p'>
                    We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
                  </p>
                </li>
                <li className='list-atrributes'>
                  <a className='footer-link' href="tel:123456789">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                    &nbsp;(123)-456-789
                  </a>
                </li>
                <li className='list-atrributes'>
                  <a className='footer-link' href="mailto: carrental@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                    &nbsp;(123)-456-789
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <ul>
                <li className='list-atrributes'>
                  <h4>Company</h4>
                </li>
                <li className='list-atrributes'>
                  <a className='footer-link' href='#home'>New York</a>
                </li>
                <li className='list-atrributes'>
                  <a className='footer-link' href='#home'>Careers</a>
                </li>
                <li className='list-atrributes'>
                  <a className='footer-link' href='#home'>Mobile</a>
                </li>
                <li className='list-atrributes'>
                  <a className='footer-link' href='#home'>Blog</a>
                </li>
                <li className='list-atrributes'>
                  <a className='footer-link' href='#home'>How we work</a>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <ul>
                <li className='list-atrributes'>
                  <h4>Working Hours</h4>
                </li>
                <li className='list-atrributes'>
                  <p>Mon - Fri: 9:00AM - 9:00PM</p>
                </li>
                <li className='list-atrributes'>
                  <p>Sat: 9:00AM - 9:00PM</p>
                </li>
                <li className='list-atrributes'>
                  <p>Sun: Closed</p>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>
              <ul>
                <li className='list-atrributes'>
                  <h4>Subscription</h4>
                </li>
                <li className='list-atrributes'>
                  <p>Enter your email for the latest news and updates.</p>
                </li>
                <div className='subscription-container'>
                <li className='list-atrributes'>
                  <input className='footer-form' type='email' placeholder='Enter Email Address' />
                </li>
                <li className='list-atrributes'>
                  <button className='footer-btn'>Submit</button>
                </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
