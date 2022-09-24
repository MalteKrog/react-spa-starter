import SideSocials from "../components/SideSocials.js"
import HomeIntro from "../components/HomeIntro.js"
import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import MyWorkTitle from "../components/MyWorkTitle.js";
import AboutSkills from "../components/AboutSkills.js";
import ContactPage from "./ContactPage.js";
import ContactSidebar from "../components/ContaktSidebar.js";


export default function HomePage() {
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
        <>
            <HomeIntro />
            <AboutSkills />
            
            <section id="work" className="grid-container">
            <MyWorkTitle />
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
                </section>
            <section className="flex-container">
            <ContactPage></ContactPage>
            <ContactSidebar></ContactSidebar>
            </section>
		    <SideSocials />
        </>
    )
};



