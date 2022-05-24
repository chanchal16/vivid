export const checkIfExists = (array, id) => {
    return array.find((itemId) => itemId === id);
};

export const checkLikedByUser = (currUser,likes) =>{
    return likes?.likedBy.some(({ name }) => name === currUser.name);
}

export const checkCurrentUser = (users,currUser) =>{
    return users?.find((user) => user.username === currUser);
}