import React, { useEffect, useState } from "react";
import "./Home.css";
import SingleCard from "../SingleCard/SingleCard";

export const Home = () => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(()=>{
        fetch('blogDb.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    
  return (
    <div>
      <div className="home-container container justify-content-between my-5 row">
        <div className="blog-container col-md-8">
        {blogs.map((blog) => (
            <SingleCard
            blog={blog}
            ></SingleCard>
        ))}
        </div>
        <div className="blog-sidebar col-md-4 card">side-bar</div>
      </div>
    </div>
  );
};
