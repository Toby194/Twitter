import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
            <SearchIcon className="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                
                <TwitterTimelineEmbed 
                    sourceType='profile'
                    screenName='nema'
                    options={{text: '#reactjs is awesome', via: 'nema'}}
                />

                <TwitterShareButton
                    url={"http://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "nema"}}
                />
            </div>
        </div>
    )
}

export default Widgets;
