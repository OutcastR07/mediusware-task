import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);
  const [allContacts, setAllContacts] = useState([]);
  const [usContacts, setUsContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const openModalA = () => {
    setShowModalA(true);
  };

  const openModalB = () => {
    setShowModalB(true);
  };

  const closeModalA = () => {
    setShowModalA(false);
  };

  const closeModalB = () => {
    setShowModalB(false);
  };

  const handleCheckboxChange = () => {
    setOnlyEven((prevValue) => !prevValue);
  };

  const fetchContacts = async () => {
    try {
      const responseAllContacts = await fetch(
        "https://contact.mediusware.com/api-doc/contacts/"
      );
      const responseUsContacts = await fetch(
        "https://contact.mediusware.com/api-doc/country-contacts/US/"
      );

      const dataAllContacts = await responseAllContacts.json();
      const dataUsContacts = await responseUsContacts.json();

      setAllContacts(dataAllContacts);
      setUsContacts(dataUsContacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const contacts = onlyEven
    ? allContacts.filter((contact) => contact.id % 2 === 0)
    : allContacts;

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="text-center">
          <div className="d-inline-block me-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={openModalA}
            >
              All Contacts
            </button>
          </div>
          <div className="d-inline-block">
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={openModalB}
            >
              US Contacts
            </button>
          </div>
        </div>

        {/* Modal A */}
        {showModalA && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content"
                style={{ animation: "fade-in 0.3s ease-in" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Modal A</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModalA}
                  ></button>
                </div>
                <div className="modal-body">
                  <ul>
                    {contacts.map((contact) => (
                      <li key={contact.id}>{contact.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="onlyEvenCheckbox"
                      checked={onlyEven}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="onlyEvenCheckbox"
                    >
                      Only even
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModalA}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal B */}
        {showModalB && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content"
                style={{ animation: "fade-in 0.3s ease-in" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Modal B</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModalB}
                  ></button>
                </div>
                <div className="modal-body">
                  <ul>
                    {usContacts.map((contact) => (
                      <li key={contact.id}>{contact.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="onlyEvenCheckbox"
                      checked={onlyEven}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="onlyEvenCheckbox"
                    >
                      Only even
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModalB}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
