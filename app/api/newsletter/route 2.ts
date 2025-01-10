export async function POST(request: Request) {
    const body = await request.json();
    const { email } = body;
    // console.log(`Trying to subscribe ${email} to the newsletter`);
    return new Response(
        JSON.stringify({
            message: `Successfully subscribed to the newsletter with email ${email}`,
        }),
        {
            status: 200,
        }
    );
}
