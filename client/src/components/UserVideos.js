import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from "./Video";
import { getUserProfileWithVideos } from "../modules/userProfileManager";

const UserVideos = () => {

  const [ userProfile, setUserProfile ] = useState();
  const { id } = useParams();
  
  // const getUserProfile = () => {
  //   getUserProfileWithVideos(id).then(setUserProfile);
  // };
  
  useEffect(() => {
    getUserProfileWithVideos(id).then(setUserProfile);
  }, []);

  if (!userProfile) {
    return null;
  }

  return (
    <div className="container">
      <strong>{userProfile.name}'s Videos: </strong>
      <div className="row justify-content-center">
        {userProfile.videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default UserVideos;