import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await getSession();
    if (!session?.user) {
        redirect("/sign_in")
    }

    const nameInitials = session.user.name
    ?.match(/\b(\w)/g)
    ?.join("")
    .slice(0, 2)

    return (
        <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
                <AvatarImage src={session.user.image ?? ""} alt="user profile image">
                    <AvatarFallback>{nameInitials}</AvatarFallback>
                </AvatarImage>
            </Avatar>
        <div className="space-y-1">
            <h1 className="text-2xl font-bold">{session.user.name}</h1>
            <p>{session.user.name}</p>
        </div>
        </div>
        
    )
}