import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';
import Footer from './../../shared/Footer/Footer';

const Services = () => {

  return (
    <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                <ServiceCard/>

            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className={`${styles.carouselButton} carousel-control-prev-icon`} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className={`${styles.carouselButton} carousel-control-next-icon`} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <Footer/>
    </>
  )
}

export default Services