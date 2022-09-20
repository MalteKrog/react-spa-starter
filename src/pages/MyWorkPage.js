import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";


export default function MyWork() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react.maltekrog.dk/wp-json/wp/v2/posts?_embed&v=9999999");
            const data = await response.json();
                        console.log(data);
            setPosts(data);
        }
        getData();
}, []);

    return (
        <section className="grid-container">
		{posts.map(post => (
		    <PostItem key={post.id} post={post} />
        ))}
        </section>
    );
}