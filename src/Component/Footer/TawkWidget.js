import React, { useEffect } from "react";

const TawkWidget = ({ propertyId }) => {
    useEffect(() => {
        if (!propertyId) {
            console.error("TawkWidget requires a property ID.");
            return;
        }

        // Check if the script already exists to avoid duplicates
        const existingScript = document.querySelector(`script[src="${propertyId}"]`);
        if (existingScript) {
            console.log("Tawk.to script already loaded.");
            return;
        }

        // Tawk.to script initialization
        const script = document.createElement("script");
        script.src = propertyId;
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);

        return () => {
            // Cleanup script on component unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [propertyId]);

    return null; // No UI component required for Tawk.to
};

export default TawkWidget;
