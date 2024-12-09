import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentlyPlayed() {
  const recentTracks = [
    { name: "Starlight", artist: "Muse", image: "/placeholder.svg", time: "2 minutes ago" },
    { name: "Levitating", artist: "Dua Lipa", image: "/placeholder.svg", time: "15 minutes ago" },
    { name: "Circles", artist: "Post Malone", image: "/placeholder.svg", time: "32 minutes ago" },
    { name: "Bleed It Out", artist: "Linkin Park", image: "/placeholder.svg", time: "1 hour ago" },
    { name: "Shake It Off", artist: "Taylor Swift", image: "/placeholder.svg", time: "1 hour ago" },
  ]

  return (
    <div className="space-y-8">
      {recentTracks.map((track) => (
        <div key={track.name} className="flex items-center">
          <Avatar className="h-9 w-9 border-2 border-green-500">
            <AvatarImage src={track.image} alt={track.name} />
            <AvatarFallback className="bg-green-500 text-white">{track.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-white">{track.name}</p>
            <p className="text-sm text-green-400">{track.artist}</p>
          </div>
          <div className="ml-auto text-sm text-gray-400">{track.time}</div>
        </div>
      ))}
    </div>
  )
}

