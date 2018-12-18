export default function (teamClassement = [], action) {
  if (action.type === 'setStandingData') {
      teamClassementCopy = [...teamClassement];
      teamClassementCopy.push(
        {
        teamId: action.teamId,
        teamStanding: action.teamStanding
      });
      return teamClassementCopy;
    } else {
    return teamClassement;
  }
};
