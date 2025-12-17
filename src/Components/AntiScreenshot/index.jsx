import { useEffect, useState } from "react";

const AntiScreenshot = () => {
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const handleKey = (e) => {
            navigator.clipboard.writeText("");
            console.log("e",e.key)

            const blockedKeys = ["PrintScreen", "F12", "Shift", "Meta"];

            // Block PrintScreen + blur screen
            if (blockedKeys.includes(e.key)) {
                e.preventDefault();
                setIsBlurred(true);

                // Auto-remove blur after 5 seconds
                setTimeout(() => setIsBlurred(false), 5000);
            }

            // Block Copy, Paste, View Source
            if (e.ctrlKey && ["c", "v", "u"].includes(e.key.toLowerCase())) {
                e.preventDefault();
            }
        };

        const handleContextMenu = (e) => e.preventDefault();

        // Add listeners
        document.addEventListener("keydown", handleKey);
        document.addEventListener("contextmenu", handleContextMenu);

        // Cleanup
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    return (
        <>
            {isBlurred && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backdropFilter: "blur(25px)",
                        background: "rgba(0,0,0,0.35)",
                        zIndex: 999999,
                        pointerEvents: "none",
                    }}
                />
            )}
        </>
    );
};

export default AntiScreenshot;
