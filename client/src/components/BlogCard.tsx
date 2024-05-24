import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const Blogcard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
     <div className="p-4 bg-bg2 border-palgreen2 border-b-2 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex-col">
           <Avatar name={authorName} />
           </div>
            <div className="font-medium text-palgreen pl-2 pr-2"> {authorName}</div>  · <div className="text-palgreen2 pl-2 pr-2"> {publishedDate} </div>
        </div>
        <div className="underline text-xl font-bold text-palgreen pt-2">
            {title}
        </div>
        <div className="text- font-light text-palgreen2">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-sm text-palgreen2 pt-2 pb-2">
            {`${Math.ceil(content.length/100)} minutes read`}
        </div>
    </div>
    </Link>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-bg2 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-medium text-textc`}>
        {name[0]}
    </span>
</div>
}