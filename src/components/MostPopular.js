import React from "react";
import { useNavigate } from "react-router-dom";

const MostPopular = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="blog-heading text-start pt-3 py-2 mb-4">Most Popular</div>
      {blogs?.map((blog) => (
        <div
          className="row pb-3"
          key={blog.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/detail/${blog?.id}`)}
        >
          <div className="col-5 align-self-center">
            <img
              className="most-popular-img"
              src={blog.imgUrl}
              alt={blog.title}
            />
          </div>
          <div className="col-7 padding">
            <div className="text-start most-popular-font">{blog.title}</div>
            <div className="text-start most-popular-font-meta">
              {blog.timestamp.toDate().toDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
