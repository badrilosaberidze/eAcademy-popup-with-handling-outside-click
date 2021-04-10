import React, { useEffect, useRef, useState } from "react";

const Popupcont = () => {
  const [popupStatus, setPopupStatus] = useState(false);
  const popupRef = useRef(null);

  const handleOnClick = (e) => {
    if (
      popupStatus &&
      popupRef.current &&
      !popupRef.current.contains(e.target)
    ) {
      setPopupStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOnClick);

    return () => {
      document.removeEventListener("click", handleOnClick);
    };
  });

  return (
    <div className={`${popupStatus ? "popup-background" : "popup-container"}`}>
      <button
        onClick={() => {
          setPopupStatus(true);
        }}
      >
        Click For Pop-up
      </button>

      {popupStatus && (
        <div className="Popup" ref={popupRef}>
          <button
            onClick={() => {
              setPopupStatus(false);
            }}
          >
            Close Popup
          </button>
        </div>
      )}
    </div>
  );
};

export default Popupcont;
