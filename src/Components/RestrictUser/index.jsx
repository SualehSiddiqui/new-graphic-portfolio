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
    const [accessGranted, setAccessGranted] = useState(null);

    useEffect(() => {
        const blacklistCountries = ["PK"];

        async function checkCountry() {
            try {
                const response = await fetch("https://api.ipwho.org/me?apiKey=" + import.meta.env.VITE_API_KEY);
                const result = await response.json();
                if (blacklistCountries.includes(result.data.geoLocation.countryCode)) {
                    setAccessGranted(false);
                } else {
                    setAccessGranted(true);
                }
            } catch (error) {
                console.error("IP check failed:", error);
                setAccessGranted(true);
            }
        }

        checkCountry();
    }, []);

    if (accessGranted === null) {
        return null;
    }

    return accessGranted ? children : <AccessDeniedUi />;
}

export default RestrictUser;
