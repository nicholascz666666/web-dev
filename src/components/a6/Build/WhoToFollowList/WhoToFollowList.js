import WhoToFollowListItem from "./WhoToFollowListItem";
import whos from "./who.json";
const WhoToFollowList = () => {
    return(
        <ul>
            {
                whos.map(w => {
                    return(<WhoToFollowListItem who={w}/>);
                })
            }
        </ul>
    );
}
export default WhoToFollowList;
