import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CardBody from "./home/post_card/CardBody";
import CardFooter from "./home/post_card/CardFooter";

import Comments from "./home/Comments";


const PostThumb = ({ posts, result }) => {
  const { theme } = useSelector((state) => state);

  if (result === 0) return <h2 className="text-center text-danger">No Post</h2>;

  return (
    <div className="post_thumb"> 
      {posts.map((post) => (
        <Link key={post._id} to={`/post/${post._id}`}>
        <div className="card my-3">
            
            <h6 style={{ padding: "5px", cursor: "pointer", color: "blue" }}>
              {post.content}
            </h6>
            <div className="d-flex justify-content-between">
            

            <h6 style={{ padding: "0 25px", cursor: "pointer", color: "red" }}>
              {post.likes.length} likes
            </h6>

            <h6 style={{ padding: "0 25px", cursor: "pointer", color: "red" }}>
              {post.comments.length} comments
            </h6>
          </div>
        </div>
        </Link>
      ))} 
    </div> 
  );
};

export default PostThumb;
