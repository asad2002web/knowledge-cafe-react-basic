import React from "react";
import "./SingleCard.css";

const SingleCard = ({ blog, handleReadTime }) => {
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
              <p>{read_time} min read</p> 
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
