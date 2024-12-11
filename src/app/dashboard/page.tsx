import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Music, Users } from "lucide-react";
import { TopArtists } from "@/components/top-artists";
import { TopTracks } from "@/components/top-tracks";
import { FollowingPlaylistCheck } from "@/components/following-playlist-check";
import {
  SpotifyTopTracksResponse,
  SpotifyTopArtistsResponse,
} from "@/models/spotify";

async function fetchTopTracks(accessToken: string) {
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    return 'There was an error';
  }

  return response.json();
}

async function fetchTopArtists(accessToken: string) {
  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    return 'There was an error';
  }

  return response.json();
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ access_token: string; refresh_token: string }>;
}) {
  const { access_token, refresh_token } = await searchParams;
  const accessToken = access_token;
  const refreshToken = refresh_token;

  if (!accessToken) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-2xl">Access token is missing</p>
      </div>
    );
  }

  const allArtists: SpotifyTopArtistsResponse = await fetchTopArtists(
    accessToken
  );
  const allTracks: SpotifyTopTracksResponse = await fetchTopTracks(accessToken);

  const [topTracks, topArtists] = await Promise.all([allTracks, allArtists]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Your Spotify Stats
          </h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-gray-800">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="top-artists"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Top Artists
            </TabsTrigger>
            <TabsTrigger
              value="top-tracks"
              className="data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            >
              Top Tracks
            </TabsTrigger>
            <TabsTrigger
              value="recently-played"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              Who likes my songs?
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-blue-500 bg-opacity-20 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">
                    Top Artists
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <TopArtists artists={topArtists.items}/>
                </CardContent>
              </Card>
              <Card className="col-span-3 bg-pink-500 bg-opacity-20 border-pink-500">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-400">
                    Top Tracks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TopTracks tracks={topTracks.items}/>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="top-artists" className="space-y-4">
            <Card className="bg-blue-500 bg-opacity-20 border-blue-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400">
                  Your Top Artists
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Based on your listening history from the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopArtists extended artists={topArtists.items}/>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="top-tracks" className="space-y-4">
            <Card className="bg-pink-500 bg-opacity-20 border-pink-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pink-400">
                  Your Top Tracks
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Your most played songs from the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopTracks extended tracks={topTracks.items}/>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recently-played" className="space-y-4">
            <Card className="bg-green-500 bg-opacity-20 border-green-500 flex flex-col">
                <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle className="text-2xl font-bold text-green-400">
                  Who likes your music?
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Check if a user is following your playlist.
                </CardDescription>
                </CardHeader>
              <CardContent className="flex items-center justify-center">
                <FollowingPlaylistCheck />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
