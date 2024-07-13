
import Link from "next/link";


export default function Footer() {

    return (
        <div className="backdrop-blur bg-black bg-opacity-50  p-6 text-center min-h-11 border-solid md:text-lg text-sm text-white">
            <div className="m-4">
                <Link className="md:px-4 px-2 hover:underline" href={"http://www.linkedin.com/in/vivek-shelke-713349251"}>LinkdIn</Link>
                <Link className="md:px-4 px-2 hover:underline" href={"https://www.instagram.com/viv_ek_shelke/"}>Instagram</Link>
                <Link className="md:px-4 px-2 hover:underline" href={"https://github.com/VivekShelke123"}>GitHub</Link>
            </div>
            <div className="m-4">
                <p>Contact: vivekshelke2003@gmail.com</p>
            </div>
            <div className="m-4 flex flex-col">
                <div >
                    <input
                        type="email"
                        id="newsletter-email"
                        placeholder="Enter Your Message Here"
                        className="mx-2 md:m-0 mb-3 text-center"
                    />
                    <button className="mx-2 bg-fuchsia-600 px-3 rounded-lg hover:bg-fuchsia-400">Submit</button>
                </div>
                <div className="mt-3 text-base"><p>© All rights reserved @ Vivek Pradip Shelke.</p></div>
            </div>
        </div>
    );
}
