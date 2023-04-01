import React, { useEffect, useState } from "react";
import "./Home.css";
import SingleCard from "../SingleCard/SingleCard";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from "react-toastify";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);
  // Data Load from API
  useEffect(() => {
    fetch("blogDb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // set spent time
  const [times, setTimes] = useState("");
  const handleReadTime = (time) => {
    const previusTime = JSON.parse(localStorage.getItem("WatchTime"));
    if (previusTime) {
      const sum = previusTime + parseFloat(time);
      localStorage.setItem("WatchTime", sum);
      setTimes(sum);
    } else {
      localStorage.setItem("WatchTime", time);
      setTimes(time);
    }
  };

  //   Set bookmark
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (bookmark) => {
    const exixtId = bookmarks.find((mark) => bookmark.id == mark.id);
    if (exixtId) {
      return toast("already exits!");
    }
    let newBookMark = [...bookmarks, bookmark];
    setBookmarks(newBookMark);
  };

  return (
    <>
      <div className="home-container container justify-content-between my-5 row">
        <div className="blog-container col-md-8">
          {blogs.map((blog) => (
            <SingleCard
            key={blog.id}
              blog={blog}
              handleReadTime={handleReadTime}
              handleBookmark={handleBookmark}
            ></SingleCard>
          ))}
        </div>
        <div className="blog-sidebar col-md-4">
          <SideBar times={times} bookmarks={bookmarks}></SideBar>
        </div>
      </div>
    </>
  );
};
