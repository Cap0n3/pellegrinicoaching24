import MailerLite from "@mailerlite/mailerlite-nodejs";

const TEST = {
    active: false, // Set to true to test fake response
    status: 500, // Set custom status code
};

export async function POST(request: Request) {
    if (TEST.active) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return new Response(
            JSON.stringify({
                message:
                    TEST.status === 200
                        ? "Successfully subscribed to the newsletter"
                        : "Failed to subscribe to the newsletter",
            }),
            {
                status: TEST.status,
            }
        );
    }
    try {
        const body = await request.json();
        const { email } = body;
        const mailerlite = new MailerLite({
            api_key: process.env.MAILERLITE_API_KEY || "",
        });
        const result = await mailerlite.subscribers.createOrUpdate({
            email: email,
            groups: ["143673317005460761"],
        });
        return new Response(
            JSON.stringify({
                message: `Successfully subscribed to the newsletter with email ${email} ${result}`,
            }),
            {
                status: 200,
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: `Failed to subscribe to the newsletter with email ${error}`,
            }),
            {
                status: 500,
            }
        );
    }
}
