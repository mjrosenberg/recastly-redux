import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
    //should call the search function, to call to youtube based on the search entry field
  //call searchYouTube, pass in: api key as key and value in search field as query

  return ((dispatch) => {
    searchYouTube({YOUTUBE_API_KEY, q}, (videos)=>{
      //call dispatch on each change needed
      // dispatch(changeVideo(videos[0]))
      // dispatch(changeVideoList(videos))
      return null;
    });
    //return null;
  })

};

export default handleVideoSearch;
