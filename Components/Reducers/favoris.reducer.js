export default function (idList = [], action) {
  if (action.type === 'addFavoris') {
    var idListCopy =  [...idList];
    //pour tous les éléments de listCopy
    for (var z in idListCopy) {
      //si on a déjà l'id dans listCopy
      if (idList[z] === action.id) {
        //on le retranche de la liste, puisqu'il ne fait plus partie des favoris
        idListCopy.splice(z,1)
          // console.log("apres splice :", idListCopy);
          return idListCopy;
      }
    }
    //>> si le if n'est pas réalisé on ajoute l'id au tableau
      idListCopy.push(action.id);
      // console.log(idListCopy);
      return idListCopy;

  } else {
    return idList;
  }
};
