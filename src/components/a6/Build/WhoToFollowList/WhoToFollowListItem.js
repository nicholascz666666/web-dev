const WhoToFollowListItem=(
    {
        who = {
            avatarIcon: '../Images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }

)=>{
    return(
        <li className="list-group-item">
                    <div className="row">
                        <div className="col-lg-1 col-xl-1 col-xxl-1">
                            <img src={who.avatarIcon} className="wd-logo"/>
                        </div>
                        <div className="col-lg-6 col-xl-7 col-xxl-8">
                            <span className="wd-right-font wd-right-bold">{who.userName}
                            <i className="fas fa-check-circle wd-right-check"/>
                            </span><br/>
                            <span  className="wd-right-font">{who.handle}</span>
                        </div>
                        <div className="col-lg-4 col-xl-3 col-xxl-1">
                            <button className="btn btn-primary">
                                Follow
                            </button>
                        </div>
                    </div>
        </li>    
    );
}
export default WhoToFollowListItem ;
