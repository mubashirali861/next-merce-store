import React from "react";
import "./Contact.css";
import BreadCrumb from "./../common/BreadCrumb";
const Contact = () => {
  return (
    <>
      <BreadCrumb title={"Contact"} pages={["contact"]} />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <p className="contact-info-title">Contact Information</p>
              </div>

              <div className="contact-info-body">
                <div className="contact-info-list">
                  <p className="contact-info-item">
                    {/* <!-- Email Icon --> */}
                    Name: James Septimus
                  </p>

                  <p className="contact-info-item">
                    {/* <!-- Phone Icon --> */}
                    Phone: 1234 567890
                  </p>

                  <p className="contact-info-item">
                    {/* <!-- Address Icon --> */}
                    Address: 7398 Smoke Ranch Road, Las Vegas, Nevada 89128
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <form>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName" className="form-label">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Jhon"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="lastName" className="form-label">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Deo"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Type your subject"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-textarea-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Type your message"
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
