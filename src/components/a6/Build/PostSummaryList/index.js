import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"

const PostSummaryList = () => {
    return(

        <ul style={{"padding-left": "0px"}}>
            {
                posts.map((w,key) => {
                    return(<PostSummaryItem post={w} key={key}/>);
                })
            }
        </ul>
    );
}
export default PostSummaryList ;
