import React, { useEffect, useState } from "react";
import "./Home.css";
import SingleCard from "../SingleCard/SingleCard";
import SideBar from "../SideBar/SideBar";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogDb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [readTime, setReadTime] = useState(0);
//   console.log(readTime)
  const handleReadTime = (time) =>{
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };

  return (
    <>
      <div className="home-container container justify-content-between my-5 row">
        <div className="blog-container col-md-8">
          {blogs.map((blog) => (
            <SingleCard
              blog={blog}
              handleReadTime={handleReadTime}
            ></SingleCard>
          ))}
        </div>
        <div className="blog-sidebar col-md-4">
          <SideBar
          readTime={readTime}
          ></SideBar>
        </div>
      </div>
    </>
  );
};
