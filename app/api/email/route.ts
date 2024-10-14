// TO DO : See : https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

const MOCK_SERVER_URL = "http://localhost:1080"; // Used for testing (mockserver, replace with actual server url to inspect requests)
const EMAIL_JS_URL = "https://api.emailjs.com/api/v1.0/email/send";
const TEST = false; // Set to true to simlate email sending and return any status code

export async function POST(request: Request) {
    if (TEST) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return new Response(JSON.stringify({ message: "Email sent" }), {
            status: 200,
        });
    }
    const body = await request.json();
    const { subject, option, fname, lname, phone, email, message } = body;
    try {
        const response = await fetch(EMAIL_JS_URL, {
            method: "POST",
            body: JSON.stringify({
                service_id: process.env.SERVICE_ID!,
                template_id: process.env.TEMPLATE_ID!,
                user_id: process.env.USER_ID!,
                template_params: {
                    subject,
                    option,
                    fname,
                    lname,
                    phone,
                    email,
                    message,
                },
                accessToken: process.env.ACCESS_TOKEN!,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status !== 200) {
            console.error(response);
            return new Response(
                JSON.stringify({ message: "An error occured" }),
                { status: 500 }
            );
        }
        return new Response(JSON.stringify({ message: "Email sent" }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "An error occured" }), {
            status: 500,
        });
    }
}
