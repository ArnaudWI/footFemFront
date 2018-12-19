// export default function (idList = [], action) {
//   console.log("reducer favoris idList :", action);
//   if (action.type === 'addFavoris') {
//     var idListCopy = [...idList];
//     var starLiked = false;
//     for (var i = 0; i < idListCopy.length; i++) {
//       if (idListCopy[i].id === action.id) {
//         starLiked = true;
//         var idListCopyCopy = [...idListCopy];
//         idListCopyCopy.splice(action.id)
//         return idListCopyCopy;
//       }
//     }
//     if (!starLiked) {
//       idListCopy.push(action.id)
//       return idListCopy;
//     }
//   } else {
//     return idList;
//   }
// };




export default function (idList = [], action) {
  console.log("reducer favoris idList :", action);
  if (action.type === 'addFavoris') {
    var idListCopy = [...idList];
    var starLiked = false;
    for (var i = 0; i < idListCopy.length; i++) {
      if (idListCopy[i].id === action.id) {
        starLiked = true;
        return idList;
      }
    }
    if (!starLiked) {
      idListCopy.push({
        id: action.id,
        teamName: action.teamName
      })
      return idListCopy;
    }
  } else {
    return idList;
  }
};
