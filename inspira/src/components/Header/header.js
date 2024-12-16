import { auth, signOut } from "@/auth"
import Link from "next/link"

export default async function Header() {
    const session = await auth()
    return (
        <>
            <div className="bg-slate-300">
                <div className="flex container mx-auto justify-between">
                    <h1 className="font-mono">
                        Learning Management System
                    </h1>


                    {
                        session ?
                            <div className="flex gap-2">
                                <h1>
                                    {session.user.email}
                                    <form
                                        action={async () => {
                                            "use server"
                                            await signOut()
                                        }}
                                    >
                                        <button type="submit">Signout</button>
                                    </form>
                                </h1>

                            </div>
                            : (

                                <Link href={'/signin'}>Login</Link>
                            )
                    }
                </div>

            </div>
        </>
    )
}