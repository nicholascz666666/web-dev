import WhoToFollowListItem from "./WhoToFollowListItem";
import whos from "./who.json";
const WhoToFollowList = () => {
    return(
        <ul>
            {
                whos.map((w,key) => {
                    return(<WhoToFollowListItem who={w} key={key}/>);
                })
            }
        </ul>
    );
}
export default WhoToFollowList;
