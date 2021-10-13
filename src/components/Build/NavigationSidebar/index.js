import React from "react";
import '../../../vendors/font-awesome/css/all.min.css';
import '../../../vendors/bootstrap/css/bootstrap.min.css';
import '../../../vendors/bootstrap/bootstrap.min.css';

const NavigationSidebar = (
    {active = 'explore'}) => { return(
    <div className="container col-sm-2 col-md-1 col-lg-1 col-xl-2 col-xxl-2 ">
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <i className="fab fa-twitter"/>
                </li>

                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'home' ? 'active' : ''}`}>
                    <i className="fas fa-home wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block ">&nbsp Home</span>

                </li>
                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block">&nbsp Explore</span>
                </li>
                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fas fa-bell wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block">&nbsp Notifications</span>
                </li>
                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fas fa-envelope wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block">&nbsp Messages</span>
                </li>

                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fas fa-bookmark wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block">&nbsp Bookmarks</span>
                </li>
                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fas fa-list wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block">&nbsp Lists</span>
                </li>
                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fas fa-user wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block">&nbsp Profile</span>
                </li>
                <li className={`list-group-ite list-group-item-action d-flex align-items-center
                 ${active === 'more' ? 'active' : ''}`}>
                    <i className="fas fa-ellipsis-h wd-left-home"/>
                    <span className="d-none d-xl-block d-xxl-block">&nbsp More</span>
                </li>
            </ul>
        </div>
        <div className="d-grid mt-2">
            <a href="../../../../public/a5/twitter/tweet.html"
               className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
        <i className="fas fa-hashtag"/>
    </div>);
};







export default NavigationSidebar;
