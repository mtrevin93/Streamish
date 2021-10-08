import React, { useEffect, useState } from "react";
import Video from './Video';
import VideoForm from "./VideoForm"
import { VideoSearch } from "./VideoSearch";
import { getAllVideosWithComments } from "../modules/videoManager";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllVideosWithComments().then(videos => setVideos(videos));
  };

  useEffect(() => {
    getVideos()
  }, []);
//Pass set Videos so that videoSearch can effect state that is displayed here. Note that the search function does not return comments, but the original getVideos DOES get with comments.
  return (
    <div className="container">
      <VideoSearch setVideos ={setVideos}/>
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;