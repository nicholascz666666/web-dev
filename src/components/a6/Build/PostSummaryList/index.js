import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"

const PostSummaryList = () => {
    return(
        <ul>
            {
                posts.map(w => {
                    return(<PostSummaryItem post={w}/>);
                })
            }
        </ul>
    );
}
export default PostSummaryList ;
