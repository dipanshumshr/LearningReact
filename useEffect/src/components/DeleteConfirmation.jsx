import { useEffect, useState } from "react";

const Timer = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(Timer);

  useEffect(() => {
    const timeBeforeTimeout = setTimeout(() => {
      onConfirm();
    }, Timer);

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if(prev <= 10)
          clearInterval(interval)
        else
          return prev - 10;
      });
    }, 10);

    return()=>{
      clearTimeout(timeBeforeTimeout)
      clearInterval(interval)
    }
  },[onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={Timer}></progress>
    </div>
  );
}
