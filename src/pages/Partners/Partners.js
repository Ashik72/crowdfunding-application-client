import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
    const [partners, setPartners] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ngoSignup')
            .then(res => res.json())
            .then(data => setPartners(data))
    }, [])
    return (
        <div>
            <div className="blogsBannerImg">
                <h1 className="text-4xl font-bold">Our Partners</h1>
            </div>

            <div className='lg:grid grid-cols-3 mx-16 my-16'>
                {
                    partners.map(partner => <div className="card w-96 bg-base-100 shadow-xl mb-6">
                        <figure><img src={partner.companyWebsite} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{partner.organigationName}</h2>
                            <p>{partner.decs.length > 100 ? partner.decs.slice(0,100) + "..." : partner.decs}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/partners/${partner._id}`}>
                                <button className="btn bg-green-400 text-white text-lg font-bold">Read More</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Partners;