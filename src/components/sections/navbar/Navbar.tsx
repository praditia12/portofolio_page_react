import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    return (
        <header className="flex flex-row justify-between items-center py-8">
            <div className="font-semibold text-xl text-navy">Adit Praditia</div>
            <div className="flex flex-row gap-5">
                <HashLink to={"#Home"} smooth>
                    Home
                </HashLink>
                <HashLink to={"#About"} smooth>
                    About
                </HashLink>
                <HashLink to={"#Work"} smooth>
                    Work
                </HashLink>
            </div>
            <div className="flex flex-row gap-5 items-center">
                <Link target="_blank" to={"https://medium.com/@adit.praditia"}>
                    <img src="/icon/medium.png" className="w-[26px]" />
                </Link>
                <Link target="_blank" to={"https://www.linkedin.com/in/adit-praditia/"}>
                    <img src="/icon/mdi_linkedin.png" className="w-[26px]" />
                </Link>
                <Link target="_blank" to={"https://github.com/praditia12"}>
                    <img src="/icon/mdi_github.png" className="w-[26px]" />
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
