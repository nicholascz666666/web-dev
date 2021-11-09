import tweets from "../data/tweets.json"

const tweetss = (state = tweets, action) => {
    switch (action.type) {
        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }

                }
                return tweet;
            });

        case 'delete-tweet':
            return state.filter(tweet => tweet._id !== action.tweet._id);

        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "/Images/react.png",
                "logo-image": "/Images/rs.jpg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ([
                    tweet,
                    ...state,
                ]
            );

        default:
            return (state);
    }
};

export default tweetss;