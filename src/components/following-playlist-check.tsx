"use client";
import { useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { spotifyUserCheck } from "@/actions/spotify-user-check";
import { useActionState } from "react";

export function FollowingPlaylistCheck() {
  const initialState = {
    message: "",
  };

  const searchParams = useSearchParams();
  const accessToken = searchParams?.get("access_token") || "";
  const [state, formAction] = useActionState(spotifyUserCheck, initialState);
  return (
    <>
      <form
        className="w-2/6 flex flex-col gap-4 items-center"
        action={formAction}
      >
        <input type="hidden" name="accessToken" value={accessToken} />
        <Input
          className="bg-gray-900 text-gray-400 placeholder-gray-400 border-green-500"
          placeholder="Enter playlist ID"
          name="playlistId"
        />
        <Input
          className="bg-gray-900 text-gray-400 placeholder-gray-400 border-green-500"
          placeholder="Enter username"
          name="userId"
        />
        <Button type="submit" className="bg-green-500 hover:bg-green-600 w-3/6">
          Check{" "}
        </Button>

        {state.message && (
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            {state.message}
          </div>
        )}
      </form>
    </>
  );
}
