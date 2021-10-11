const NavigationSidebar = () => {
    return(`
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        <i class="fab fa-twitter"></i>
                    </li>

                    <li class="list-group-item list-group-item-action d-flex align-items-center" >
                        <i class="fas fa-home wd-left-home"></i>
                        <span class="d-none d-xl-block d-xxl-block ">&nbsp Home</span>

                    </li>
                    <li class="list-group-item active list-group-item-action d-flex align-items-center">
                        <i class="fas fa-hashtag wd-left-home"></i>
                        <span class="d-none d-xl-block d-xxl-block">&nbsp Explore</span>
                    </li>
                    <li class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fas fa-bell wd-left-home"></i>
                        <span class="d-none d-xl-block d-xxl-block" >&nbsp Notifications</span>
                    </li>
                    <li class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fas fa-envelope wd-left-home"></i>
                        <span class="d-none d-xl-block d-xxl-block" >&nbsp Messages</span>
                    </li>

                    <li class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fas fa-bookmark wd-left-home"></i>
                        <span class="d-none d-xl-block d-xxl-block" >&nbsp Bookmarks</span>
                    </li>
                    <li class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fas fa-list wd-left-home" ></i>
                        <span class="d-none d-xl-block d-xxl-block" >&nbsp Lists</span>
                    </li>
                    <li class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fas fa-user wd-left-home" ></i>
                        <span class="d-none d-xl-block d-xxl-block" >&nbsp Profile</span>
                    </li>
                    <li class="list-group-item list-group-item-action d-flex align-items-center">
                        <i class="fas fa-ellipsis-h wd-left-home" > </i>
                        <span class="d-none d-xl-block d-xxl-block" >&nbsp More</span>
                    </li>
                </ul>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
