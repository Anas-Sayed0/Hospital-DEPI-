import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Doctors.module.css';


const DoctorCard = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctor data: ", error);
            }
        };

        fetchDoctors();
    }, []);

  return (
    <>
        {
            doctors.map((doctor) => {
                return(
                    <div className="col-md-6 col-lg-3" key={doctor._id}>
                        <div className="card h-100">
                            <img 
                            src={`http://localhost:5000/${doctor.img}`} 
                            className={`${styles.image} card-img-top`}
                            alt={`${doctor.name}`}/>
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">{doctor.name}</h5>
                                <p className="text-secondary fw-semibold">{doctor.profession}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default DoctorCard