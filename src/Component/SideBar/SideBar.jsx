import React, { useEffect, useState } from "react";
import "./SideBar.css";

const SideBar = ({ times, bookmarks }) => {
  // Time spent hundler
  const [time, setTime] = useState(times);
  useEffect(() => {
    const getTime = localStorage.getItem("WatchTime");
    if (getTime) {
      setTime(getTime);
    } else {
      setTime(0);
    }
  }, [times]);

  useEffect(() => {
    return localStorage.clear();
  }, []);

  //
  return (
    <div>
      <div className="time-spent w-full py-3 text-center">
        <h5 className="m-0">Spent time on read : {time} min</h5>
      </div>
      <div className="blog-bookmark h-full card my-3 p-3">
        <h5>
          Bookmarked Blogs : <span>{bookmarks.length}</span>
        </h5>
        {bookmarks.map((blog) => (
          <div class="card-body bg-white rounded my-2">
            <h6 class="card-text">{blog.title}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
