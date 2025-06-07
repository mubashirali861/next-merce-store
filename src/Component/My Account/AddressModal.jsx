import React from "react";
import "./AddressModal.css";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
const AddressModal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest(".modal-content")) {
        closeModal();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);
  return (
    <div className="modal-overlay {{ isOpen ? 'show' : 'hide' }}">
      <div className="modal-wrapper">
        <div className="modal-content">
          <button
            onClick={closeModal}
            aria-label="button for close modal"
            className="modal-close-button"
          >
            {/* <!-- Replace with close-icon.svg --> */}
            <IoMdClose />
          </button>

          <div>
            <form>
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue="James Septimus"
                    className="form-input"
                  />
                </div>

                <div className="form-col">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue="jamse@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue="1234 567890"
                    className="form-input"
                  />
                </div>

                <div className="form-col">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    defaultValue="7398 Smoke Ranch RoadLas Vegas, Nevada 89128"
                    className="form-input"
                  />
                </div>
              </div>

              <button type="submit" className="submit-button">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
