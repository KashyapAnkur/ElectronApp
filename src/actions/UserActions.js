const deleteuser = id => ({type: "deleteuser",id: id});
const isSelected = id => ({type: "isSelected", id: id});
export {deleteuser, isSelected};