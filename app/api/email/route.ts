// TO DO : See : https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

const MOCK_SERVER_URL = "http://localhost:1080"; // Used for testing (mockserver, replace with actual server url to inspect requests)
const EMAIL_JS_URL = "https://api.emailjs.com/api/v1.0/email/send";

const TEST = {
    active: false, // Set to true to test fake response
    status: 200, // Set custom status code
};

export async function POST(request: Request) {
    if (TEST.active) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return new Response(
            JSON.stringify({
                message:
                    TEST.status === 200
                        ? "Successfully sent email"
                        : "Failed to send email",
            }),
            {
                status: TEST.status,
            }
        );
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
            throw new Error("An error occured");
        }
        return new Response(JSON.stringify({ message: "Email sent" }), {
            status: 200,
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
        });
    }
}
