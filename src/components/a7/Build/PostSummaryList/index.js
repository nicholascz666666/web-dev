import PostSummaryItem from "./PostSummaryItem.js";
import posts from "../../../../../src/data/posts.json"

const PostSummaryList = () => {
    return(
        <ul style={{"paddingLeft": "0px"}}>
            {
                posts.map((w,key) => {
                    return(<PostSummaryItem post={w} key={key}/>);
                })
            }
        </ul>
    );
}
export default PostSummaryList ;
