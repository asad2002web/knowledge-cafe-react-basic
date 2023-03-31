import React from "react";
import "./SingleCard.css";

const SingleCard = ({ blog, handleReadTime, handleBookmark }) => {
  const {author, title, image, author_img, publish_date, read_time,hastag_first, hastag_second } = blog;
  return (
    <div>
      <div class="card mb-3">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <div className="card-information my-3 d-flex justify-content-between align-items-center">
            <div className="author d-flex align-items-center gap-3">
              <div className="author-img">
                <img src={author_img} alt="" />
              </div>
              <div className="author-info">
                <p className="fw-bold fs-4">{author}</p>
                <p>{publish_date}</p>
              </div>
            </div>
            <div className="read-time">
              <p>{read_time} min read  <span onClick={()=>handleBookmark(blog)} className="bookmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </span></p> 
            </div>
          </div>
          <h5 class="card-title fs-3 fw-bold w-75">{title}</h5>
          <p>
            <a href="#">{hastag_first}</a>
            <a className="ps-3" href="#">{hastag_second}</a>
          </p>
          <p onClick={()=> handleReadTime(read_time)} className="py-3 
           px-3 rounded border d-inline-block m-0 p-0">mark as read</p>
          
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
