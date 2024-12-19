import { getSession } from "next-auth/react"
import { SignInDialog } from "./signin-dialog"
import { Button } from "../ui/button"
import { UserProfileDropdown } from "./user-profile-dropdown"

export const UserProfile = async() => {
    const session = await getSession()
    if (!session?.user) {
        return (
            <SignInDialog>
                <Button size="sm">ログイン</Button>
            </SignInDialog>
        )
    } else {
        return (
            <UserProfileDropdown user={session.user}/>
        )   
    }
}