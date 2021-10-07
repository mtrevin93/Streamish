import React from "react";
import { Card, CardBody } from "reactstrap";

const Comment = ({ comment }) => {
  return (
    <Card >
      <p className="text-left px-2">Comment by: {comment.userProfile.name}</p>
      <CardBody>
        <p>{comment.message}</p>
      </CardBody>
    </Card>
  );
};

export default Comment;