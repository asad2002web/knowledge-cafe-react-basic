import React, { useEffect, useState } from "react";
import "./Home.css";
import SingleCard from "../SingleCard/SingleCard";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from 'react-toastify';


export const Home = () => {
  const [blogs, setBlogs] = useState([]);
// Data Load from API
  useEffect(() => {
    fetch("blogDb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
// set spent time
  const [readTime, setReadTime] = useState("");
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

//   Set bookmark 
const [bookmarks,setBookmarks] =useState([])
const handleBookmark =(bookmark) =>{
    const blogId = bookmark.id;
    const addToLocalStorage = (id)=>{
      const quiantity = localStorage.getItem(id);
      if(quiantity){
        toast("already exits!")
      }else{
        const newBookMark = [...bookmarks ,bookmark]
        setBookmarks(newBookMark)
        localStorage.setItem(id,bookmark.title)
      }     
    }
    addToLocalStorage(blogId)
}

  return (
    <>
      <div className="home-container container justify-content-between my-5 row">
        <div className="blog-container col-md-8">
          {blogs.map((blog) => (
            <SingleCard
              blog={blog}
              handleReadTime={handleReadTime}
              handleBookmark={handleBookmark}
            ></SingleCard>
          ))}
        </div>
        <div className="blog-sidebar col-md-4">
          <SideBar
          readTime={readTime}
          bookmarks={bookmarks}
          ></SideBar>
        </div>
      </div>
    </>
  );
};
