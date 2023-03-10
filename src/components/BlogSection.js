import React from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../utility/index";

const BlogSection = ({ blogs, user, handleDelete }) => {
  const userId = user?.uid;
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">Daily Blogs</div>
      {blogs.map((item) => (
        <div className="row pb-4" key={item.id}>
          <div className="col-md-5">
            <div className="hover-blogs-img">
              <div className="blogs-img">
                <img src={item.imgUrl} alt={item.title} />
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="text-start">
              <h6 className="category catg-color">{item.category}</h6>
              <span className="title py-2">{item.title}</span>
              <span className="meta-info">
                <p className="author">{item.author}</p> -&nbsp;
                {item.timestamp.toDate().toDateString()}
              </span>
            </div>
            <div className="short-description text-start">
              {excerpt(item.description, 120)}
            </div>
            <Link to={`/detail/${item.id}`}>
              <button className="btn btn-read">Read More</button>
            </Link>
            {userId && item.userId === userId && (
              <div style={{ float: "right" }}>
                <button
                  className="btn btn-danger btn-sm m-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <Link to={`/update/${item?.id}`}>
                  <span className="btn btn-success btn-sm">Update</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
