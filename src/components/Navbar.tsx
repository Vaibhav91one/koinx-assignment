import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/koinx_logo.png" alt="logo" width={74} height={29} />
            </Link>



            <div className="hidden lg:flex items-center justify-center gap-10">
                <div>
                    <ul className="h-full gap-12 hidden lg:flex">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.key} href={link.href} className="text-black font-semibold cursor-pointer transition-all hover:font-bold">
                                {link.label}
                            </Link>
                        ))}

                    </ul>
                </div>

                <div>
                    <Button className="bg-blue-600">
                        Get Started
                    </Button>
                </div>

            </div>

            <div className="lg:hidden cursor-pointer hover:text-blue-700 transition-all">
                <Menu />
            </div>

        </nav>
    )
}

export default Navbar
