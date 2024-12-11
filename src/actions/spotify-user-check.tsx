"use server";

export async function spotifyUserCheck(prevState: any, formData: FormData) {
  const userId = formData.get("userId");
  const playlistId = formData.get("playlistId");
  const accessToken = formData.get("accessToken");

  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    return { message: "There was an error" };
  }

  const result = await response.json();
  if (result[0]) {
    return { message: "The user is following the playlist." };
  } else {
    return { message: "The user is not following the playlist." };
  }
}
