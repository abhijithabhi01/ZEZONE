import { BASE_URL } from './baseurl'
import { commonAPI } from './commonAPI'

//register
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/registration`,user,"")
}

//login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//addpost
export const addpostAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/user/addpost`,reqBody,reqHeader)
}

//get user profile post

export const getuserprofileAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/userposts/profile`,"",reqHeader)
}

//get user home posts
export const getallpostsAPI  = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/userpost/allposts`,"",reqHeader)
}
// get all users
export const getallusersAPI  = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/users/allusers`,"",reqHeader)
}
//user search
export const getalluserssearchAPI  = async(searchuser,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/users/search?search=${searchuser}`,"",reqHeader)
}
//edit post
export const editpostAPI = async(postId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/userpost/edit/${postId}`,reqBody,reqHeader)
}

//delete post api
export const deletepostAPI = async(postId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/post/delete/${postId}`,{},reqHeader)
}

// edit profile api
export const editProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}

//delete post api
export const deleteuserAPI = async(userId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/user/delete/${userId}`,{},reqHeader)
}

//likepost
export const likepostAPI = async(postId,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/userposts/like/${postId}`,reqHeader)
}

//dislikepost
export const dislikepostAPI = async(postId,reqHeader,reqBody)=>{
    return await commonAPI("POST",`${BASE_URL}/userposts/dislike/${postId}`,{},reqHeader)
}