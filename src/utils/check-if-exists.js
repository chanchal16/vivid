export const checkIfExists = (array, id) => {
    return array.find((item) => item._id === id);
};

export const checkLikedByUser = (currUser,likes) =>{
    return likes?.likedBy.some(({ name }) => name === currUser.name);
}