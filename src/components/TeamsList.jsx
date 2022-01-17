/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { Fragment, useState } from "react";
import { getScore } from "../helpers/getScore";
import { TEAMS } from "../utils/teams";


export function TeamsList() {
	const [teams, setTeams] = useState(TEAMS);

	// Order teams by score (highest to lowest)
	function orderTeamByScoreHighestToLowest() {
		let tempTeam = [...TEAMS]
		let sortedTeams = tempTeam.sort((lowest, highest) => getScore(highest.games) - getScore(lowest.games))
		setTeams([...sortedTeams])
	}

	// Order teams by score (lowest to highest)
	function orderTeamByScoreLowestToHighest() {
		let tempTeams = [...TEAMS]
		let sortedTeams = tempTeams.sort((lowest, highest) => getScore(lowest.games) - getScore(highest.games))
		setTeams([...sortedTeams])
	}

	// Filtering teams that with at least 3 players
	function teamsWithMoreThanThreePlayers() {
		setTeams(()=> TEAMS.filter(team => team.players.length >= 3))
	}

	return (
		<div>
			<button onClick={() => setTeams([...TEAMS])}>Initial list</button>
			<button onClick={orderTeamByScoreHighestToLowest}>Highest to Lowest</button>
			<button onClick={orderTeamByScoreLowestToHighest}>Lowest to Highest</button>
			<button onClick={teamsWithMoreThanThreePlayers}>Teams with at least 3 players</button>

			<ul className="teams">
				{teams && teams.map(team => {
					return(
						<li key={team.name} style={{display: "flex", flexDirection: "column", border: "1px solid grey"}}>
							<b>Team name: <span style={{color: team.name.toLowerCase()}}> {team.name} </span> </b>
							<p><i>Players: </i>{team.players.map(player => `${ player} `)}</p>
							<table style={{textAlign: "center"}}>
								<tr><b>Games: </b> </tr>
								{team.games.map(game => {
									return(
										<Fragment>
											<tr><td><b>Score</b></td> <td><b>Score</b></td></tr>
											<tr><td>{game.score}</td>{game.city}<td></td></tr>
										</Fragment>
									)
								})}
							</table>

						</li>
					)
				})}
			</ul>
		</div>
	);
}
