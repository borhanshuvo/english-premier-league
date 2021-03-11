import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;