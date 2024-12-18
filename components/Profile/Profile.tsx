'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import UserProfile from './GetUsername'
import { useState } from 'react'

interface ProfileProps {
    isLoggedIn: boolean
    username: string
    displayName: string
    avatar_url: string
    description: string

    updateDisplayNameAction?: (
        formData: FormData
    ) => Promise<{ success: boolean; newDisplayName?: string }>
    updateDescriptionAction?: (
        formData: FormData
    ) => Promise<{ success: boolean; newDescription?: string | null }>
    isOwnProfile: boolean
    totalFollowers: User[]
    totalFollowing: User[]
    rating: Rating[]
    userAchievments: Achievments[]
    followingId: string
    initialIsFollowing: boolean
    onAvatarClick?: (isClicked: boolean) => void // New prop for avatar click handler
}

interface User {
    id: string
    first_name: string
    last_name: string
    avatar_url: string | null
    username: string | null
    followingId: string
}

interface Rating {
    id: string
    rating: number
}

interface Achievments {
    achievement_id: string
    title: string
    description: string
    achieved_at: string
}

export default function Profile({
    username,
    displayName,
    description,
    avatar_url,
    updateDisplayNameAction,
    updateDescriptionAction,
    isLoggedIn,
    isOwnProfile,
    totalFollowers,
    totalFollowing,
    rating,
    userAchievments,
    followingId,
    initialIsFollowing,
    onAvatarClick,
}: ProfileProps) {
    const [isAvatarClicked, setIsAvatarClicked] = useState(false)

    const handleAvatarClick = () => {
        console.log(isAvatarClicked)
        const newClickedState = !isAvatarClicked
        setIsAvatarClicked(newClickedState)

        // If onAvatarClick prop is provided, call it with the new state
        if (onAvatarClick) {
            onAvatarClick(newClickedState)
        }
    }

    return (
        <div className="mt-16 pt-4">
            <div className="flex">
                <Avatar className="mr-4 h-20 w-20" onClick={handleAvatarClick}>
                    <AvatarImage src={avatar_url} />
                    <AvatarFallback>PF</AvatarFallback>
                </Avatar>
                <UserProfile
                    isLoggedIn={isLoggedIn}
                    username={username}
                    displayName={displayName}
                    updateDisplayNameAction={updateDisplayNameAction}
                    isOwnProfile={isOwnProfile}
                    description={description}
                    updateDescriptionAction={updateDescriptionAction}
                    totalFollowers={totalFollowers}
                    totalFollowing={totalFollowing}
                    rating={rating}
                    followingId={followingId}
                    initialIsFollowing={initialIsFollowing}
                    userAchievments={userAchievments}
                />
            </div>
        </div>
    )
}
