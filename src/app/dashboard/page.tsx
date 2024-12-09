'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Music, Users } from 'lucide-react'
import { TopArtists } from "@/components/top-artists"
import { TopTracks } from "@/components/top-tracks"
import { RecentlyPlayed } from "@/components/recently-played"

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Here you would typically fetch the user's Spotify data
    // For now, we'll just simulate a loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-2xl">Loading your Spotify stats...</p>
      </div>
    )
  }

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
            <TabsTrigger value="overview" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="top-artists" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">Top Artists</TabsTrigger>
            <TabsTrigger value="top-tracks" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">Top Tracks</TabsTrigger>
            <TabsTrigger value="recently-played" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Recently Played</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-purple-500 bg-opacity-20 border-purple-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Listen Time</CardTitle>
                  <Music className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127 hours</div>
                  <p className="text-xs text-gray-400">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-500 bg-opacity-20 border-blue-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unique Artists</CardTitle>
                  <Users className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-xs text-gray-400">+18 from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-pink-500 bg-opacity-20 border-pink-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Top Genre</CardTitle>
                  <Music className="h-4 w-4 text-pink-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Indie Rock</div>
                  <p className="text-xs text-gray-400">30% of your listening time</p>
                </CardContent>
              </Card>
              <Card className="bg-green-500 bg-opacity-20 border-green-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Favorite Time to Listen</CardTitle>
                  <CalendarDays className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">9 PM - 11 PM</div>
                  <p className="text-xs text-gray-400">Consistent for the last 3 months</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-blue-500 bg-opacity-20 border-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">Top Artists</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <TopArtists />
                </CardContent>
              </Card>
              <Card className="col-span-3 bg-pink-500 bg-opacity-20 border-pink-500">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-400">Top Tracks</CardTitle>
                </CardHeader>
                <CardContent>
                  <TopTracks />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="top-artists" className="space-y-4">
            <Card className="bg-blue-500 bg-opacity-20 border-blue-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400">Your Top Artists</CardTitle>
                <CardDescription className="text-gray-400">
                  Based on your listening history from the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopArtists extended />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="top-tracks" className="space-y-4">
            <Card className="bg-pink-500 bg-opacity-20 border-pink-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-pink-400">Your Top Tracks</CardTitle>
                <CardDescription className="text-gray-400">
                  Your most played songs from the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopTracks extended />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recently-played" className="space-y-4">
            <Card className="bg-green-500 bg-opacity-20 border-green-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-400">Recently Played</CardTitle>
                <CardDescription className="text-gray-400">
                  Your listening history from the last 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentlyPlayed />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

