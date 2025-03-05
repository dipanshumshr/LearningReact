import { useImperativeHandle, useRef } from "react";
import { forwardRef } from "react";

const Result = forwardRef(({result,targetTime,timeRemaining, resetTimer}, ref) => {
    const dialog = useRef();

    const remaining = (timeRemaining/1000).toFixed(2);
    const score = Math.round((1-(timeRemaining/(targetTime*1000))) *100);

    useImperativeHandle(ref, () => {
        return{
          open : () => {
                dialog.current.showModal();
            }
        }
    })
    return(
        <dialog ref={dialog} className="result-modal" onClose={resetTimer}>
            <h2>You {result}</h2>
            <h2>Your score: {score}</h2>
            <p>
                The target was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong> {remaining} seconds left</strong>
            </p>
            <form method="dialog" onSubmit={resetTimer}>
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default Result;