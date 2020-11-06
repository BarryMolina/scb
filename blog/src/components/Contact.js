import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section className="contact-container">
        <div className="contact-method">
          <span className="icon alt fa-envelope"></span>
          <h3>Email</h3>
          <a href="#">stcroixballet@gmail.com</a>
        </div>

        <div className="contact-method">
          <span className="icon alt fa-phone"></span>
          <h3>Phone</h3>
          <span>(651) 439-2820</span>
        </div>

        <div className="contact-method">
          <span className="icon alt fa-home"></span>
          <h3>Address</h3>
          <span>
            11520 110th St.
            <br />
            Stillwater, MN 55082
            <br />
            United States of America
          </span>
        </div>
      </section>
    </div>
  </section>
)

export default Contact
