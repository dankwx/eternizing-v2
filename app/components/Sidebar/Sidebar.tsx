import Link from 'next/link'

export default function Sidebar() {
    return (
        <main className="flex max-w-72 flex-grow border-r-2 border-solid border-gray-200 bg-gray-50">
            <div className="flex flex-col">
                <Link href="/addvideo">Eternize Video</Link>
                <Link href="/claimedvideos">View Claimed</Link>

                <p>fdfdfddf</p>
            </div>
        </main>
    )
}
