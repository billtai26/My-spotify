import { useSignIn } from "@clerk/react/legacy"

const SignInOAuthButton = () => {
  const { signIn, isLoaded } = useSignIn()

  if (!isLoaded || !signIn) return null

  const signInWithGoogle = async () => {
    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    })
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="bg-white text-black px-4 py-2 rounded-md font-medium whitespace-nowrap"
    >
      <img src="/google.png" alt="Google" className="size-5" />
      Continue with Google
    </button>
  )
}

export default SignInOAuthButton
