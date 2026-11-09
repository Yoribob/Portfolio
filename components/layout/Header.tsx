export function Header(){
    return (
        <header className="w-full h-12 lg:h-16 flex flex-row gap-5 p-5 lg:p-10 lg:gap-10 items-center">
            <span className="mr-auto font-semibold text-xl lg:text-4xl">Stepan</span>
            <button className="font-medium italic text-sm lg:text-2xl">About</button>
            <button className="font-medium italic text-sm lg:text-2xl">Projects</button>
            <button className="font-medium italic text-sm lg:text-2xl">Contact</button>
        </header>
    )
}