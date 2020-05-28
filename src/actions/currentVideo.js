var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.

  //when a title is clicked, currentVideo state should change
  //when a search is implemented, currentVideo state should change to 1st video in list

  //define the type as 'CHANGE_VIDEO;
  type: 'CHANGE_VIDEO',
  //define a video key as the video passed in
  video
});

export default changeVideo;
