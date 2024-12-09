import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopTracks({ extended = false }: { extended?: boolean }) {
  const tracks = [
    { name: "Bohemian Rhapsody", artist: "Queen", image: "/placeholder.svg" },
    { name: "Blinding Lights", artist: "The Weeknd", image: "/placeholder.svg" },
    { name: "Shape of You", artist: "Ed Sheeran", image: "/placeholder.svg" },
    { name: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", image: "/placeholder.svg" },
    { name: "Despacito", artist: "Luis Fonsi & Daddy Yankee ft. Justin Bieber", image: "/placeholder.svg" },
  ]

  return (
    <div className="space-y-8">
      {tracks.slice(0, extended ? undefined : 3).map((track, index) => (
        <div key={track.name} className="flex items-center">
          <Avatar className="h-9 w-9 border-2 border-pink-500">
            <AvatarImage src={track.image} alt={track.name} />
            <AvatarFallback className="bg-pink-500 text-white">{track.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-white">{track.name}</p>
            <p className="text-sm text-pink-400">{track.artist}</p>
          </div>
          {extended && (
            <div className="ml-auto font-medium text-pink-400">#{index + 1}</div>
          )}
        </div>
      ))}
    </div>
  )
}

