/**
 * This function communicate with cloudflare to verify the turnstile captcha token
 * @returns Result of the verification
 */
export const verifyToken = async (token: string) => {
    if (!token) {
        throw new Error("Captcha token is missing. Please reload the page.");
    }

    try {
        const response = await fetch("/api/captcha/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });
        console.log(response);

        if (!response.ok) {
            const errorMessage = `Network response was not ok. Status: ${response.status} ${response.statusText}`;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }

        const result = await response.json();
        console.log("Captcha verification result:", result);
        console.log("Type of result: ", typeof result);
        return result;
    } catch (error) {
        console.error("A network error occured:", error);
        throw new Error("A network error occured while verifying the token");
    }
};
