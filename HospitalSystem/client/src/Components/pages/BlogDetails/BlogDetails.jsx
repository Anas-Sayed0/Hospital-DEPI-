import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BlogDetails.css';
import backgroundImg from "../../../assets/images/background.jpg";
import Footer from './../../shared/Footer/Footer';

const BlogDetails = () => {
  const location = useLocation();
  const { imgSrc } = location.state || {};

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
          <h1>Blog Single Page</h1>
          <p><strong>Home-Blog-</strong>  Blog Single</p>
        </section>
      </header>
      <div className="col-12 d-flex justify-content-center">
        <div className="card w-50">
          {imgSrc.includes("youtube") ? (
            <iframe
              src={imgSrc}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ height: '15rem', width: '100%' }}
            ></iframe>
          ) : (
            <img
              src={imgSrc}
              className="card-img-top"
              alt="blog details"
            />
          )}
          <div className="card-body">
            <p className="card-blue-text">By Admin March 3, 2022</p>
            <p style={{ fontSize: '20px' }}>
              <strong>
                A wonderful serenity has taken possession of my entire soul
                like these sweet mornings spring which I enjoy.
              </strong>
            </p>
            <p className="card-text">
              As we age, the discs in our spine can degenerate, causing chronic
              pain and discomfort in the back and neck that can significantly
              impact daily life. Understanding what degenerative disc disease
              (DDD) is, its symptoms, causes, and the available treatment
              options can help you manage this common condition and improve your
              quality of life.Degenerative disc disease is a condition that
              affects the discs between the vertebrae in your spine. Each disc
              has a gelatinous center and a tougher outer covering. These discs
              act like cushions, absorbing shock and allowing flexibility and
              movement in your back. Over time, the discs can degenerate. This
              can lead to pain and discomfort in your back and neck from the
              loss of protective cushioning. DDD is a natural part of aging. It
              is not actually a "disease," but rather a condition that can cause
              symptoms if the discs deteriorate significantly. When discs are
              damaged, the inner part can push out and press on the spinal cord
              or nerve. This is known as a herniated or "slipped" disc, and it
              may cause weakness. The disc can also become so worn out that the
              vertebrae start to rub together. <br /><br />Degenerative disc
              disease is a condition that affects the discs between the
              vertebrae in your spine. Each disc has a gelatinous center and a
              tougher outer covering. These discs act like cushions, absorbing
              shock and allowing flexibility and movement in your back. Over
              time, the discs can degenerate. This can lead to pain and
              discomfort in your back and neck from the loss of protective
              cushioning. DDD is a natural part of aging. It is not actually a
              "disease," but rather a condition that can cause symptoms if the
              discs deteriorate significantly. When discs are damaged, the inner
              part can push out and press on the spinal cord or nerve. This is
              known as a herniated or "slipped" disc, and it may cause weakness.
              The disc can also become so worn out that the vertebrae start to
              rub together.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;




