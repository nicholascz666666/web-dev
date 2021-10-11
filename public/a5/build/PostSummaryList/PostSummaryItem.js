const PostSummaryItem  = (post) => {
    return(`<li class="list-group-item">
                        <div class="row">
                            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                                <h5 class="wd-color-lg">${post.topic}</h5>
                                <h5>${post.userName}
                                    <i class="fas fa-check-circle"></i> - ${post.time}
                                </h5>
                                <h5>${post.title}</h5>

                            </div>
                            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <img src=${post.image} class="wd-bd-r img-fluid" alt="Responsive image">
                            </div>
                        </div>
                    </li>
        
    `);
}
export default PostSummaryItem ;