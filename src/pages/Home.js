import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const iconStule = {
        marginRight: '7px' 
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center mt-5">
                    <h1>BEELDI</h1>
                    <div className="mt-4">
                        <Link to="/equipments" className="btn btn-primary btn-lg btn-square p-4">
                        <div className=" p-3">
                            <FontAwesomeIcon icon={faTools} style={iconStule} />
                            <span>Equipments</span>
                        </div>
                        
                        </Link>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-secondary btn-lg" disabled>
                            <div className="p-3">
                                <FontAwesomeIcon icon={faTools} style={iconStule} />
                                <span>Fonctionnalités à venir</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
