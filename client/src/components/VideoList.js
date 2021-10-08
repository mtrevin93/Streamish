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

  return (
    <div className="container">
      <VideoForm getVideos={getVideos}/>
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