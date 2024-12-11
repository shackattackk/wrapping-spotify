import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  const scope = "user-read-private user-read-email user-top-read";
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "";
  const clientId = process.env.SPOTIFY_CLIENT_ID || "";
  const state = crypto.randomBytes(16).toString("hex");

  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scope
  )}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

  return NextResponse.redirect(authUrl);
}
