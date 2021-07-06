import { getPosts, deletePost} from "../services/postServices"

export const getAllPost = () => {
    return async (dispatch)=>{
        try{
            const {data, status} = await getPosts();
            await dispatch({type:"INIT",payload:data})
        }catch(e){
            console.log('مقداری نمیباشد')
        }
    }
}

export const addPost = () => {

}

export const deletePostItem = (postId,index) => {
    return async (dispatch, getState) => {
        const posts = [...getState().posts];
        const filteredPosts = posts.filter(post => post.id !== postId);
        try{
            const {data, status} = await deletePost(postId);
            console.log(data,status);
            if (status === 200) {
                posts.slice(index,1);
                console.log('del',posts);
                await dispatch({type:"DELETE_POST",payload:filteredPosts})
            }
        }catch(e){
            if(e.response.status === 403)
            {
              return  console.log('برای حذف پست باید لاگین شوید.');
            }
           return console.log('حذف نشد');
        }
    }
}
