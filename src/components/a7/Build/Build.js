import React from "react";

import ExploreScreen from "./ExploreScreen/ExploreScreen";


// const Build = () => {
//     return(
//         <>
//             <ExploreScreen/>
//         </>
// )
// };
//
// export default Build;


const Build = ({match}) => {
    return (
        <div>
            <Route path={[`${match.url}/`, `${match.url}/home`]} exact={true} component={HomeScreen}/>
            <Route path={`${match.url}/explore`} exact={true} component={ExploreScreen}/>
        </div>
    )
}
export default Build;
