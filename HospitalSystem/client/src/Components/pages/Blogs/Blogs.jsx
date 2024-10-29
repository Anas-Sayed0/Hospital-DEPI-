import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogs.css';
import blog1 from "../../../assets/images/blog1.jpg";
import blog2 from "../../../assets/images/blog2.jpg";
import backgroundImg from "../../../assets/images/background.jpg";
import Footer from './../../shared/Footer/Footer';

const blogs = [
  { id: 1, imgSrc: blog1 },
  { id: 2, imgSrc: blog2 },
  { id: 3, imgSrc: "https://www.youtube.com/embed/pWahNIMRxR0" }
];

const Blogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { imgSrc: blog.imgSrc } });
  };

  return (
    <>
      <header>
        <section 
          className="hero-section text-center py-5" 
          style={{ 
            backgroundImage: `url(${backgroundImg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h1>From Our Blog</h1>
          <p><strong>Home</strong>-Blogs</p>
        </section>
      </header>
      <div className="container">
        {blogs.map((blog, index) => (
          <div key={index} className="col-12 d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
              {blog.imgSrc.includes("youtube") ? (
                <iframe
                  src={blog.imgSrc}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ height: '15rem' }}
                ></iframe>
              ) : (
                <img
                  src={blog.imgSrc}
                  style={{ height: '15rem' }}
                  className="card-img-top"
                  alt="blog details"
                />
              )}
              <div className="card-body">
                <p className="card-blue-text">By Admin March 3, 2022</p>
                <h5 className="card-title" style={{ fontSize: '18px' }}>
                  Uompe Qrear High Ecent Nche Without Some Prinle Uomp Without Some Qrearl High Ecent
                </h5>
                <p className="card-text">
                  As we age, the discs in our spine can degenerate, causing chronic pain and discomfort in the back and neck that can significantly impact
                </p>
              </div>
              <button 
                onClick={() => handleReadMore(blog)} 
                className="btn btn-primary button button-primary"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default Blogs;



