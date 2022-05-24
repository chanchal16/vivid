
export const sortPosts = (posts,type)=>{
    switch(type){
        case 'SORT_BY_RECENT':
            return [...posts]?.sort((a,b)=> new Date(b.updatedAt) - new Date(a.updatedAt));
        case 'SORT_BY_OLDER':
            return [...posts]?.sort((a,b)=> new Date(a.updatedAt) - new Date(b.updatedAt));
        case 'TRENDING':
            return [...posts]?.sort((a,b)=>b.likes.likeCount - a.likes.likeCount);
        default:
            return posts;
    }
}