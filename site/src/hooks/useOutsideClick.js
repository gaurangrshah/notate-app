import React, { useRef, useEffect } from "react";


function useOutsideClick(ref, { toggle, handleToggle, toggle2 }) {
  /**
   * Alert if clicked on outside of element
   */

  function handleClickOutside(event) {
    if (!toggle) return
    if (ref.current && !ref.current.contains(event.target)) {
      console.log("clicked outside");
      if (toggle2) return toggle2();
      if (toggle === true) {
        return handleToggle("show");
      }
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export function OutsideClick(props) {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, props.controls);

  return <span ref={wrapperRef}>{props.children}</span>;
}
