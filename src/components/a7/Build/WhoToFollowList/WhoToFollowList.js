import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const whos = useSelector((state) => state);
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
