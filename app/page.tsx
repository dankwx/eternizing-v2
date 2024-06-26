import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import GetAuth from '../components/GetAuth/GetAuth'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <div className="flex min-h-full w-full flex-1 flex-col justify-between font-mono text-sm">
                <div className="flex h-full flex-1">
                    <Sidebar />
                    <div className="flex">
                        <p>home</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
