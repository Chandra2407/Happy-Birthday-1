export const setUserInfo = ({
    user = "",
    password = "",
}) => {
    localStorage.setItem('userInfo',JSON.stringify({
        user,
        password,
    }));
};
export const getUserInfo = ()=>{
    const userInfo = localStorage.getItem('userInfo');
    if(userInfo){
        return JSON.parse(userInfo);
    }
    else{
        return {
            user:"",
            password:"",
        }
    }
};