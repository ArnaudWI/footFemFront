export default function (teamNotif = {}, action) {
  console.log("reducer favoris teamNotif :", action);
  if (action.type === 'goNotif') {
    var teamNotifCopy =  {...teamNotif,
      id: action.id,
      teamName: action.teamName
    };
    return teamNotifCopy;
  } else {
    return teamNotif;
  }
};
