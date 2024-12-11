import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Track } from "@/models/spotify";

export function TopTracks({
  extended = false,
  tracks,
}: {
  extended?: boolean;
  tracks: Track[];
}) {
  return (
    <div className="space-y-8">
      {tracks.slice(0, extended ? undefined : 3).map((track, index) => (
        <div key={track.name} className="flex items-center">
          <Avatar className="h-9 w-9 border-2 border-pink-500">
            {track.album && track.album.images && track.album.images.length > 0 ? (
              <AvatarImage src={track.album.images[0].url} alt={track.name} />
            ) : (
              <AvatarFallback className="bg-pink-500 text-white">
                {track.name[0]}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-white">
              {track.name}
            </p>
            <p className="text-sm text-pink-400">
              {track.artists && track.artists.length > 0 ? track.artists[0].name : "Unknown Artist"}
            </p>
          </div>
          {extended && (
            <div className="ml-auto font-medium text-pink-400">
              #{index + 1}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
