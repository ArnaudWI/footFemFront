export default function (stats = {teamId: 0, matchsGagnes:0, matchsNuls:0, matchsPerdus:0, matchsTotaux:0}, action) {
  if (action.type === 'setTeamData') {
      stats.teamId = action.teamId;
      stats.matchsGagnes = action.matchsGagnes;
      stats.matchsNuls= action.matchsNuls;
      stats.matchsPerdus=action.matchsPerdus;
      stats.matchsTotaux =action.matchsGagnes + action.matchsNuls+action.matchsPerdus;


      return stats
    } else {
    return stats;
  }
};
