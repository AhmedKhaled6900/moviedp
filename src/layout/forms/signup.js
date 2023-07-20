import { useForm, useFieldArray } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import Container from 'react-bootstrap/esm/Container';
import { useEffect, useState } from "react";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { register, control, handleSubmit, formState } = useForm({
    });
    const { setError, errors, isDirty, isValid, isSubmitting } = formState
    const checkname = (serverUsers, formData) => {
        const user = serverUsers.find(user => user.username === formData.username); 
        if (user) return user;
    };
    const checkmail = (servermails, formData) => {
        const user = servermails.find(user => user.email === formData.email); 
        if (user) return user;
    };
    const onSubmit = async (formData) => {

        const user = await axios
            .get("http://localhost:8000/formdata")
            .then((res) => checkname(res.data, formData))
        const usermail = await axios
            .get("http://localhost:8000/formdata")
            .then((res) => checkmail(res.data, formData))
        if (usermail) {
            alert("This mail is used before ")
        }
        else if (user) { alert("This name is used before ") }
        else
            await axios.post("http://localhost:8000/formdata", formData).then((res) => {
                console.log(res.data);
            });
    };
    return (
        <Container>
            <div>
                {/* add noValidate attribute on the form element this will prevent browser validation and allowing react hook form to handle the validation of the field         */}
                <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
                        <label htmlFor="username"> UserName   <p className="">{errors.username?.message}</p></label>
                        {/* add the required field validation to the username field pass object as second arg to the register function spicefie requiered as key and error message */}
                        <input type="text" id="username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            {...register("username", { required: "* User Name is required" })} />
                    </div>
                    <div>
                        <label htmlFor="email"> Email      <p>{errors.email?.message}</p>  </label>
                        <input type="email" id="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            {...register("email", {
                                required: "* Email is required ",
                                // validate: ,
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "* Invalid Email "
                                }
                            })} />
                    </div>
                    <div>
                        <label htmlFor="password">  Your password     <p>{errors.password?.message}</p> </label>
                        <input type="password" id="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}

                            {...register("password", {
                                
                                minLength:{
                                    value:8,
                                    message:"passworrd at least 8 char"
                                },
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
                <DevTool control={control} ></DevTool>
            </div>
            {/* </form> */}
            <h1>
                sign up component
            </h1>
            <DevTool control={control} />
        </Container>
    );
}
export default Signup;

