import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';

const Team = (props) => {
    const team = props.team;
    const { strTeam, strAlternate, strTeamBadge, idTeam} = team;
    const history = useHistory();
    const teamInfo = (id) => {
        const url = `information/${id}`;
        history.push(url);
    }
    return (
        <div className="container card mt-5" style={{ width: '18rem' }}>
            <img src={strTeamBadge} className="card-img-top mt-3" style={{ height: '250px' }} alt="" />
            <div className="card-body">
                <h5 className="card-title">{strTeam}</h5>
                <p className="card-text">{strAlternate}</p>
            </div>
            <div className="card-footer">
                <button onClick={() => teamInfo(idTeam)} className="btn btn-primary">Explore &nbsp; <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </div>
        </div>
    );
};

export default Team;