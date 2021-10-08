import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import {  CommentList } from "./CommentList";

const Video = ({ video }) => {
  return (
    <Card >
      {video.UserProfile?
      "" :  
      <p className="text-left px-2">Posted by:   
      <Link to={`/users/${video.userProfileId}`}className = "link">{video.userProfile?.name} </Link>
      </p>
      }
      <CardBody>
        <iframe className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
        <Link to={`/videos/${video.id}`}>
          <strong>{video.title}</strong>
        </Link>
        </p>
        <p>{video.description}</p>
    {video.comments? <CommentList comments = {video.comments}  /> : ""}
      </CardBody>
    </Card>
  );
};

export default Video;


<Link to="/" className="navbar-brand">
StreamISH
</Link>