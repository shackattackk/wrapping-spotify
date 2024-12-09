import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopArtists({ extended = false }: { extended?: boolean }) {
  const artists = [
    { name: "The Beatles", image: "/placeholder.svg", genre: "Rock" },
    { name: "Taylor Swift", image: "/placeholder.svg", genre: "Pop" },
    { name: "Kendrick Lamar", image: "/placeholder.svg", genre: "Hip-Hop" },
    { name: "Daft Punk", image: "/placeholder.svg", genre: "Electronic" },
    { name: "Adele", image: "/placeholder.svg", genre: "Pop" },
  ]

  return (
    <div className="space-y-8">
      {artists.slice(0, extended ? undefined : 3).map((artist, index) => (
        <div key={artist.name} className="flex items-center">
          <Avatar className="h-9 w-9 border-2 border-blue-500">
            <AvatarImage src={artist.image} alt={artist.name} />
            <AvatarFallback className="bg-blue-500 text-white">{artist.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-white">{artist.name}</p>
            <p className="text-sm text-blue-400">{artist.genre}</p>
          </div>
          {extended && (
            <div className="ml-auto font-medium text-blue-400">#{index + 1}</div>
          )}
        </div>
      ))}
    </div>
  )
}

