import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Music } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Spotify Stats Dashboard
      </h1>
      <Button asChild className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 px-8">
        <Link href="/api/auth/spotify">
          <Music className="mr-2 h-5 w-5" /> Connect Spotify
        </Link>
      </Button>
    </div>
  );
}
