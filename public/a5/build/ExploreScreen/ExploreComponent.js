import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="input-group mb-3" >
                        <div class="input-group-text override-bs2 wd-search-icon">
                            <i class="fa fa-search"></i>
                        </div>
                        <input type="text" class="form-control override-searchbar" placeholder="Search Twitter">

                    <div class="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1">
                        <i class="fas fa-cog fa-2x wd-float-right wd-color-blue"></i>
                    </div>
                    </div>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                </li>
               <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
               </li>
              <li class="nav-item">
                        <a class="nav-link" href="sports.html">sports</a>
              </li>
              <li class="nav-item">
                        <a class="nav-link d-none d-md-block d-lg-block d-xl-block d-xxl-block" href="entertainment.html">entertainment</a>
              </li>
           </ul>
           <div class="position-relative">
                    <img src="../../twitter/explore/pz.jpg" class="img-fluid" alt="Responsive image">
                    <span class="text-over-img position-absolute bottom-0 start-0 wd-txt-over-image">SpaceX's Starship</span>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
