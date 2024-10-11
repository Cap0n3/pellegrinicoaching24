// FOR TESTING PURPOSES
const TEST = false; // Set to true to simlate email sending and return any status code
const ALWAYS_FAILS = "2x0000000000000000000000000000000AA"; // Always fails the captcha
const ALWAYS_PASSES = "1x0000000000000000000000000000000AA"; // Always passes the captcha

// Actual secret key
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY!;

export async function POST(request: Request) {
    if (TEST) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return new Response(JSON.stringify({ message: "An error occured" }), {
            status: 500,
        });
    }
    const body = await request.json();
    const { token } = body;

    const formData = new URLSearchParams();
    const secretKey = TURNSTILE_SECRET_KEY; // Secret key (replace key here to test)
    if (!secretKey) {
        throw new Error("TURNSTILE_SECRET_KEY is not defined");
    }
    formData.append("secret", secretKey);
    formData.append("response", token);
    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        return new Response(JSON.stringify(data), { status: response.status });
    } catch (error) {
        return new Response(JSON.stringify({ message: "An error occured" }), {
            status: 500,
        });
    }
}
