import parse from "html-react-parser";
import CardButton from "./CardButton.js";

export default function PostItem({ post }) {

    return (
            <div className="card">
                <h3 className="f-title">Featured Project</h3>
                <h4 className="card-title">{parse(post.title.rendered)}</h4>
                {/* <img className="card-img" src={post.acf?.image?.url} alt={post.title.rendered} /> */}
                <p className="card-p">{parse(post.content.rendered)}</p>  
                <CardButton></CardButton>
            </div>  
        
        
    );
}