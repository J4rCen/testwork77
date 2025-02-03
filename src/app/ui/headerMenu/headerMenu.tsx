'use client'

import { useRouter } from "next/navigation"

const HeaderMenu = () => {

    const router = useRouter()

    return (
        <div className="container-fluid bg-primary">
            <div className="row align-items-center">
                <button onClick={() => router.push('/')} type="button" className="btn btn-primary col">Главная</button>
                <button onClick={() => router.push('/pages/weather')} type="button" className="btn btn-primary col">Погода</button>
                <button onClick={() => router.push('/pages/favorites')} type="button" className="btn btn-primary col">Избранное</button>
            </div>
        </div>
    )
}

export default HeaderMenu