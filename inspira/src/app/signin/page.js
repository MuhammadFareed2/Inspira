
import { signIn, auth } from "@/auth"
import { redirect } from "next/navigation"
 
export default async function SignIn() {

    const session = await auth()
    console.log("session=>", session)

    if (session) redirect('/')

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Continue with Google</button>
    </form>
  )
} 