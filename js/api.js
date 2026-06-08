const SCHEME_CODE = 119597;

async function fetchFundData() {
    try {
        const response = await fetch(
            `https://api.mfapi.in/mf/${SCHEME_CODE}`
        );

        return await response.json();

    } catch (error) {
        console.error("API Error:", error);
    }
}