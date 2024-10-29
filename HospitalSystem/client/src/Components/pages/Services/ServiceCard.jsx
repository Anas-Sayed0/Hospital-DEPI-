import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import styles from './Services.module.css';

const ServiceCard = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:5000/services');
                setServices(response.data);
            } catch (error) {
                console.error("Error fetching services: ", error);
            }
        };

        fetchServices();
    }, []);

  return (
    <>
        {
            services.map((service, index) => {
                return(
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={service._id}>
                        <div className="d-flex justify-content-center align-items-center gap-4 p-5 my-5 flex-wrap">
                            <div><img className={`${styles.serviceImg} container-fluid carousel-img`} src={`http://localhost:5000/${service.img}`} alt={service.service} /></div>

                            <div>
                                <h5 className="fw-bold px-2">{service.service}</h5>
                                <div className={`${styles.serviceDesc} text-secondary-emphasis px-2`}>{service.description}</div>
                            </div>

                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default ServiceCard