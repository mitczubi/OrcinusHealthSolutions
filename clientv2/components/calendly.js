import { PopupWidget } from "react-calendly";

export default function CalendlyWidget () {
    return (
        <>
            <PopupWidget
                url="https://calendly.com/kwoods-physician_coach"
                rootElement={typeof window !== 'undefined' ? document.getElementById("__next") : null}
                text="Schedule a Session"
                color="#e3c6a6"
                textColor="#0f1820"
            />
        </>
    )
}