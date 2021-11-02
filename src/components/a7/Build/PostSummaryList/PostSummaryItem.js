const PostSummaryItem  = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../../../public/a5/twitter/explore/react.png"
        }
    }

) => {
    return(

        <li className="list-group-item">
                        <div className="row">
                            <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                                <h5 className="wd-color-lg">{post.topic}</h5>
                                <h5>{post.userName}
                                    <i className="fas fa-check-circle"/> - {post.time}
                                </h5>
                                <h5>{post.title}</h5>

                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <img src={post.image} className="wd-bd-r img-fluid" alt="Responsive image"/>
                            </div>
                        </div>
                        </li>
        );
}
export default PostSummaryItem ;