import PostSummaryList from "../PostSummaryList/index.js";
import React from "react";
const ExploreComponent = (key) => {
    return(
        <div>
            <div className="row">
                       <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="input-group mb-3" >
                        <div className="input-group-text override-bs2 wd-search-icon">
                            <i className="fa fa-search wd-color-lg"/>
                        </div>
                        <input type="text" className="form-control override-searchbar" placeholder="Search Twitter"/>

                    <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                        <i className="fas fa-cog fa-2x wd-float-right wd-color-blue"/>
                    </div>
                    </div>
                </div>
           </div>
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                        <a className="nav-link active" href="../../../../../public/a5/for-you.html">For you</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="../../../../../public/a5/trending.html">Trending</a>
                </li>
               <li className="nav-item">
                        <a className="nav-link" href="../../../../../public/a5/news.html">News</a>
               </li>
              <li className="nav-item">
                        <a className="nav-link" href="../../../../../public/a5/sports.html">sports</a>
              </li>
              <li className="nav-item">
                        <a className="nav-link d-none d-md-block d-lg-block d-xl-block d-xxl-block"
                           href="../../../../../public/a5/entertainment.html">entertainment</a>
              </li>
           </ul>
           <div className="position-relative">
                    <img src="/Images/pz.jpg" className="img-fluid" alt="Responsive image"/>
                    <span className="text-over-img position-absolute bottom-0 start-0 wd-txt-over-image">SpaceX's Starship</span>
                </div>
           {PostSummaryList()}
        </div>
    );
}
export default ExploreComponent;
