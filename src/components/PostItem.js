import parse from "html-react-parser";

export default function PostItem({ post }) {

    return (
        <article>
            <img src={post.acf?.image?.url} alt={post.title.rendered} />
            <h2>{parse(post.title.rendered)}</h2>
            <p>{parse(post.acf.description)}</p>    
        </article>
    );
}