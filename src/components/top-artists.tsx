import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Artist } from "@/models/spotify";

function capitalizeFirstLetter(string: string) {
  return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function TopArtists({
  extended = false,
  artists,
}: {
  extended?: boolean;
  artists: Artist[];
}) {
  return (
    <div className="space-y-8">
      {artists.slice(0, extended ? undefined : 3).map((artist, index) => (
        <div key={artist.name} className="flex items-center">
          <Avatar className="h-9 w-9 border-2 border-blue-500">
            {artist.images && artist.images.length > 0 ? (
              <AvatarImage src={artist.images[0].url} alt={artist.name} />
            ) : (
              <AvatarFallback className="bg-blue-500 text-white">
                {artist.name}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-white">
              {artist.name}
            </p>
            {artist.genres && artist.genres.length > 0 && (
              <p className="text-sm text-blue-400">
                {capitalizeFirstLetter(artist.genres[0])}
              </p>
            )}
          </div>
          {extended && (
            <div className="ml-auto font-medium text-blue-400">
              #{index + 1}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
