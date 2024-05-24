import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@tomar606/blog-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) => {

    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest(){
        try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = response.data
        localStorage.setItem("token", jwt);
        console.log(jwt);
        navigate("/blogs")
        } catch(e) {

        }
    }

    return <div className="bg-bg1 h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="px-10">
            <div className="text-textc text-3xl font-extrabold">
        Create an Account
    </div>
    </div>
    <div className="text-slate-500 flex justify-center">
        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
        <Link className="pl-2 text-textc underline" to={type === "signin" ? "/signup" : "/signin"}>
        {type  === "signin" ? "Sign up" : "Sign in"}
        </Link>
    </div>
    <div className="pt-8">
     {type === "signup" ? <LabelledInput label="Name" placeholder="Bruce Wayne" onChange={(e) => {
        setPostInputs({
            ...postInputs,
            name: e.target.value
        })
    }} /> : null}
    <LabelledInput label="Email" placeholder="batman@gmail.com" onChange={(e) => {
        setPostInputs({
            ...postInputs,
            username: e.target.value
        })
    }} />
    <LabelledInput label="Password" type={'password'} placeholder="darkknight123" onChange={(e) => {
        setPostInputs({
            ...postInputs,
            password: e.target.value
        })
    }} />
    <button type="button" onClick={sendRequest} className="mt-8 w-full text-bg2 bg-textc hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
               </div>
            </div>
        </div>
    </div>
}

interface LabelledInput {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type}: LabelledInput) {
    return <div>
            <label className="block mb-2 text-sm text-textc font-semibold pt-3">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 text-textc dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
}