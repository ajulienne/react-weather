import React from "react";
import "./Toast.scss";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { removeToast } from "../../store/actions/toast.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const Toast = () => {
  const toast = useSelector((state) => state.toastReducer.toast);
  const dispatch = useDispatch();

  const closeToast = () => {
    dispatch(removeToast());
  };

  return (
    <div className={classNames("toast", toast?.type, { show: toast !== null })}>
      {toast && (
        <>
          <button onClick={closeToast}>
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
          </button>
          <p>
            <strong>{toast.title}</strong>
            <br />
            {toast.message}
          </p>
        </>
      )}
    </div>
  );
};
