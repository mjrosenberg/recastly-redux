var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.

  //when a search is implemented, videoList should create a list element for each video in the array

  //define a CHANGE_VIDEO_LIST value
  type: 'CHANGE_VIDEO_LIST',
  //pass in videos as defined in argument
  videos

});

export default changeVideoList;
