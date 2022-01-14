//gets higher score by adding each game score together
export const getScore = (arrScore) => arrScore.reduce((acc, score)=> acc + score.score, 0)
