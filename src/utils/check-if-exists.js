export const checkIfExists = (array, id) => {
    return array.find((itemId) => itemId === id);
};

export const checkLikedByUser = (currUser,likes) =>{
    return likes?.likedBy.some(({ name }) => name === currUser.name);
}