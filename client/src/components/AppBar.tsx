import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-4 py-4 bg-palgreen2">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer w-40" style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>

            <Avatar size={"big"} name="harkirat" />
        </div>
    </div>
}