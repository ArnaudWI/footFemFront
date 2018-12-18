export default function (stateStar = false, action) {
  console.log(stateStar);
  if (action.type === 'addFavoris') {
    return !stateStar;
  } else {
    return stateStar;
  }
};
