
import { useForm  } from "react-hook-form"
import Container from 'react-bootstrap/esm/Container';
import {  useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import  {  loginuser } from "../../reducers/loginreducer/loginreducer";
import { useNavigate } from "react-router-dom";

function Login(){
    const dispatch=useDispatch()
    const [auth,setAuth]=useState()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, formState } = useForm({
    });
    const {  errors  } = formState
    const navigate=useNavigate()

    const isauth=useSelector((state)=>state.login)
    console.log(isauth)
    const checkname = (serverUsers, formData) => {
        const username = serverUsers.find(user => user.username === formData.username); 
        if (username) return username;
    };
    const checkpassword = (servermails, formData) => {
        const userpassword = servermails.find(user => user.password === formData.password); 
        if (userpassword) return userpassword;
    };
   

    const onSubmit = async (formData) => {

        const username = await axios
            .get("http://localhost:8000/formdata")
            .then((res) => checkname(res.data, formData))
        const userpassword = await axios
            .get("http://localhost:8000/formdata")
            .then((res) => checkpassword(res.data, formData))
        if (username&&userpassword) {
            // alert("username and password are correct  ")
         localStorage.setItem("isauth",true)
         navigate("/",{replce:true})

    //    return  dispatch(loginuser())
        
        }
 
        else

        alert("username or password  not correct  ")
    };

    return ( 

        
      <Container>

<form  action="" onSubmit={handleSubmit(onSubmit)} noValidate auth={auth} >
                    <div className="">
                        <label htmlFor="username"> UserName   <p className="">{errors.username?.message}</p></label>
                        {/* add the required field validation to the username field pass object as second arg to the register function spicefie requiered as key and error message */}
                        <input className="" type="text" id="username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            {...register("username", { required: "* User Name is required" })} />
                    </div>
                    <div>
                        <label htmlFor="password">  Your password     <p>{errors.password?.message}</p> </label>
                        <input type="password" id="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}

                            {...register("password", {

                                pattern: {

                                    message: "* Invalid password "
                                },
                                required:
                                    "* Password is required "
                            })} />
                    </div>
                    <button
                    //  disabled={!isValid || isSubmitting}
                     >submit</button>
                    </form>

      </Container>
    );
}

export default Login;