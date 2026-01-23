import { useEffect, useState } from "react";
import "./style.css";

function AccessDeniedUi() {
    return (
        <div className="main-access-div">
            <div className="sub-access-div">
                <h1>Access Denied</h1>
            </div>
        </div>
    );
}

function RestrictUser({ children }) {
    const [accessGranted, setAccessGranted] = useState(null); // null = loading

    useEffect(() => {
        const blacklistCountries = ["PK"]; // Pakistan

        async function checkCountry() {
            try {
                const response = await fetch("https://ipwho.is/");
                const result = await response.json();

                console.log("Country Code:", result.country_code);

                if (blacklistCountries.includes(result.country_code)) {
                    setAccessGranted(false);
                } else {
                    setAccessGranted(true);
                }
            } catch (error) {
                console.error("IP check failed:", error);
                setAccessGranted(true); // fail open (optional)
            }
        }

        checkCountry();
    }, []);

    // Loading state (prevents content flash)
    if (accessGranted === null) {
        return null; // or a spinner
    }

    return accessGranted ? children : <AccessDeniedUi />;
}

export default RestrictUser;
