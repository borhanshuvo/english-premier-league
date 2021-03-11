import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../male.png';
import female from '../../female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './TeamDetail.css';

const TeamDetail = () => {
    const { id } = useParams();
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInfo(data.teams[0]));
    }, [id]);

    const gender = info.strGender;
    let image;
    if (gender === "Male") {
        image = male;
    }
    else
    {
        image = female;
    }

    return (
        <div style={{ backgroundColor: 'rgb(14, 10, 42)' }}>
            <img className="thumb-image" src={info.strStadiumThumb} alt="" />
            <img src={info.strTeamBadge} className="badge-image" alt="" />
            <div className="container">
                <div className="mt-5">
                    <div className="row detail-card-body">
                        <div className="col-md-6 text-start" style={{ paddingTop: '50px', paddingLeft: '100px' }}>
                            <h1>{info.strTeam}</h1>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {info.intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country : {info.strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type : Football</p>
                            <p><FontAwesomeIcon icon={faMars} /> Gender : {info.strGender}</p>
                        </div>
                        <div className="col-md-6">
                            <img src={image} className="card-img-top" alt="" />
                        </div>
                    </div>
                    <p className="m-5 text-start" style={{ color: 'white' }}>{info.strDescriptionEN}</p>
                    <div className="pb-5">
                        <a href={`https://${info.strTwitter}`} Target="_blank"><FontAwesomeIcon className="social-tag-twitter m-3" icon={faTwitter} /></a>
                        <a href={`https://${info.strWebsite}`} Target="_blank"><FontAwesomeIcon className="social-tag-facebook m-3" icon={faFacebook} /></a>
                        <a href={`https://${info.strYoutube}`} Target="_blank"><FontAwesomeIcon className="social-tag-youtube m-3" icon={faYoutube} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;