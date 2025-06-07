import { Link } from "react-router-dom";

const Contacts = () => {
    return (
        <section className="flex flex-col mb-16">
            <h2 className="font-extrabold text-navy text-7xl leading-relaxed">contact.</h2>
            <div className="flex flex-row gap-x-14 mt-8">
                <img src="/images/contact.png" alt="images-contact" width={440} />
                <div className="flex flex-col gap-y-6">
                    <div className="text-navy text-xl leading-[44px]">
                        Thank you for visiting my portfolio. If you're interested in working together or freelance
                        opportunities, feel free to reach out via email or connect through the social links below.
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Link target="_blank" to={"mailto:aditpraditiaaa@gmail.com"} className="text-orange text-xl">
                            aditpraditiaaa@gmail.com
                        </Link>
                        <Link
                            target="_blank"
                            to={"https://www.linkedin.com/in/adit-praditia/"}
                            className="text-orange  text-xl"
                        >
                            linkedin.com/in/adit-praditia
                        </Link>
                        <Link target="_blank" to={"https://github.com/praditia12"} className="text-orange text-xl">
                            github.com/praditia12
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
