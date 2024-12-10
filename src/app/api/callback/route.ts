import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!state) {
    return NextResponse.json(
      { error: "State parameter is missing" },
      { status: 400 }
    );
  }

  const tokenUrl = "https://accounts.spotify.com/api/token";
  const data = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code || '',
    redirect_uri: redirectUri || '',
  });
  const authHeader =
    "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: authHeader,
      },
      body: data.toString(),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from Spotify:', errorText);
      throw new Error('Failed to fetch access token');
    }
    const {access_token, refresh_token} = await response.json();
    return NextResponse.redirect(`${process.env.BASE_URL}/dashboard?access_token=${access_token}&refresh_token=${refresh_token}`);
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
