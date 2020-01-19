import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = function({ children }) {
    const elRef = useRef(null);

    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(function() {
        modalRoot.appendChild(elRef.current);

        return function() {
            modalRoot.removeChild(elRef.current);
        };
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
