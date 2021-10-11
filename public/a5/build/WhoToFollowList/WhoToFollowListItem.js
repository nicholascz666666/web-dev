
const WhoToFollowListItem=(who)=>{
    return(`
        <li class="list-group-item">
                    <div class="row">
                        <div class="col-lg-1 col-xl-1 col-xxl-1">
                            <img src= ${who.avatarIcon} class="wd-logo">
                        </div>
                        <div class="col-lg-6 col-xl-7 col-xxl-8">
                            <span class="wd-right-font wd-right-bold">${who.userName} <i class="fas fa-check-circle wd-right-check"></i>
                            </span></br>
                            <span  class="wd-right-font">@${who.handle}</span>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-xxl-1">
                            <button class="btn btn-primary">
                                Follow
                            </button>
                        </div>
                    </div>
        </li>    
    `);
}
export default WhoToFollowListItem ;
