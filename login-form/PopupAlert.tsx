import React, { MouseEventHandler, useEffect, useState } from 'react';

interface ModelBox {
  msg: string;
  showAlert: boolean;
  onHide: MouseEventHandler<HTMLButtonElement>;
}

const PopupAlert = ({ msg, showAlert, onHide }: ModelBox) => {
  const [popupDisplay, setPopupDisplay] = useState('none');

  useEffect(() => {
    if (showAlert) {
      setPopupDisplay('block');
    } else {
      setPopupDisplay('none');
    }
  }, [showAlert]);

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div
        className="modal"
        id="alertModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{
          display: popupDisplay,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Alert
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onHide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{msg}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onHide}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAlert;
