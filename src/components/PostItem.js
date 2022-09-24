import parse from "html-react-parser";
import CardButton from "./CardButton.js";

export default function PostItem({ post }) {

    return (
        <div className="card">
            <h3 className="f-title">Featured Projects</h3>
            <h4 className="card-title">{parse(post.title.rendered)}</h4>
            {/* <img className="card-img" src={post.acf?.image?.url} alt={post.title.rendered} /> */}
            <p className="card-p">{parse(post.content.rendered)}</p> 
            <div className="card-div">
                <div className="card-desk">
                    <h3 className="f-titledesk">Featured Project</h3>
                    <h4 className="card-titledesk">{parse(post.title.rendered)}</h4>
                    <p className="card-pdesk">{parse(post.content.rendered)}</p> 
                </div> 
            </div>
            <CardButton></CardButton>
        </div>  
    );
}