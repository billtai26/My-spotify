import { LayoutDashboardIcon } from "lucide-react"
import { SignOutButton, useAuth } from "@clerk/react"
import { Link } from "react-router-dom"
import SignInOAuthButton from "./SignInOAuthButton"

const Topbar = () => {
  const isAdmin = false
  const { isLoaded, isSignedIn } = useAuth()

  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        My Spotify
      </div>

      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to="/admin" className="flex items-center">
            <LayoutDashboardIcon className="size-4 mr-2" />
            Admin Dashboard
          </Link>
        )}

        {isLoaded && isSignedIn && (
          <SignOutButton>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium whitespace-nowrap">
              Sign Out
            </button>
          </SignOutButton>
        )}

        {isLoaded && !isSignedIn && <SignInOAuthButton />}
      </div>
    </div>
  )
}

export default Topbar
