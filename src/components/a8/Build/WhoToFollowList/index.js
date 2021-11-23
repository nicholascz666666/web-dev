import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who to follow</li>
                {who.map((who,k) => {
                    return(
                        <WhoToFollowListItem who = {who} key={k}/>
                    );
                })
            }
            </ul>
        </>
    );
};

export default WhoToFollowList;

