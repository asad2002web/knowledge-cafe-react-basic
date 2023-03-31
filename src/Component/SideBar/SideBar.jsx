import React, { useEffect, useState } from "react";
import "./SideBar.css";

const SideBar = ({ readTime }) => {
  // 
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getTimeStorage = localStorage.getItem("readTime");
    setTime(getTimeStorage);
  }, [readTime]);
  //
  return (
    <div>
      <div className="time-spent w-full py-3 text-center">
        <h5>Spent time on read : {time} min</h5>
      </div>
      <div className="blog-bookmark h-full card my-3 p-3">
        <h5>Bookmarked Blogs : 8</h5>  
        <div class="card-body bg-white rounded my-2">
          <h6 class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
