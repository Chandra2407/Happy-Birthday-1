import { admin } from "../data.js";
import { getUserInfo, setUserInfo } from "../localstorage.js";

const LoginScreen = {
    after_render:()=>{
        const loginForm = document.getElementById("login");
        loginForm.addEventListener("submit",(e)=>{
            e.preventDefault();
            let user = document.getElementById("user").value;
            let password = document.getElementById("password").value;
            let isAdmin = admin.find((item)=>{
              return (item.name===user && item.password===password)
            })
            if(isAdmin){
                setUserInfo({user,password});
                document.location.hash = "/home"
            }
            else{
                let loginError = document.getElementById("loginError");
                loginError.innerHTML = "glt h yarr";
                setTimeout(() => {
                    loginError.innerHTML = "";
                }, 2000); 
            }
        })
    },
    render : ()=>{
        if(getUserInfo().user){
            document.location.hash = "/home";
        }
        return `
        <div class="form-container">
               <form id="login">
                   <ul class="form-items">
                       <li>
                           <h2>Login</h2>
                       </li>
                       <li>
                           <label for="user">Username</label>
                           <input type="text" name="user" id="user">
                       </li>
                       <li>
                           <label for="password">Password</label>
                           <input type="password" name="password" id="password">
                       </li>
                       <li>
                           <button type="submit">Submit</button>
                       </li>
                       <li>
                       <div id="loginError">
                       
                       </div>
                       </li>
                   </ul>
               </form>
           </div>
        `
    }
};

export default LoginScreen;