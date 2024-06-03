import React from 'react'
import loginImage from "../../assets/images/login.jpeg"
import Input from '../../components/Input'
import { usePost } from '../../utils/PostData'
import { LoaderCircle } from 'lucide-react'


function Login({setShowlogin, showLogin}) {
    const {loading, postData, responseData} = usePost()

    const [formData, setFormData] = React.useState({})


    const handleChange =(e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData, 
            [name]: value
        })
        console.log(formData)
    }


    const handleSubmit = async (e)=>{
        e.preventDefault()
        postData("/api/v1/login", formData)
    }

    console.log(responseData)
  return (
    <div className={`w-full h-screen  justify-center items-center p-2  fixed top-0 left-0 z-50 transition-all  ${showLogin ? "flex" : "hidden"}`} >
        <div className='w-full h-screen -z-10 absolute top-0 left-0 bg-black/50' onClick={()=>{setShowlogin(false)}}>

        </div>
        {/* Desktop View */}
        <div className='xl:w-[60%] lg:w-[80%] xl:h-[70%] lg:h-[40%]   bg-white shadow-lg lg:rounded-[3rem] flex justify-center items-center max-lg:hidden'>

            <div className="w-3/5  h-[100%] flex items-center p-2 flex-col justify-around ">
                <div>
                    <h1 className='text-center text-3xl font-bold text-green-600'>Welcome Back!</h1>
                    <p className='text-gray-600 text-md'>Please log in to your account to continue.</p>
                </div>
             
                <form className='flex flex-col w-[80%]' onSubmit={handleSubmit}>
                   <Input name={"email"} type={"email"} placeholder={"eg: JohnDoe@example.com"} required={true} label={"Email"} onchange={handleChange}/>
                   <Input name={"password"} type={"password"} placeholder={"eg: **********"} required={true} label={"Password"} onchange={handleChange}/>

                   <button className='w-full bg-green-600 hover:bg-green-500 transition-all text-white rounded-full p-2 shadow-lg mt-2 duration-500'>
                          {loading ? <LoaderCircle className='animate-spin mx-auto'/> : "Login"}
                   </button>
                </form>

                <div className='text-gray-900 '>
                    Forgot Password? <a href="#" className='text-green-600'>Click here</a> to reset your password.
                </div>

                <p className='text-gray-600 text-md'>Do not have an account ? <a href="register" className='text-green-600'>Register</a></p>


                
            </div>

            <div className='w-2/5  h-[100%] bg-gray-100 rounded-r-[3rem] '>
              
                    <img src={loginImage} className='object-cover w-full h-[100%] rounded-r-[3rem] shadow-lg'/>
            </div>
            
        </div>


        {/* Mobile View */}
        <div className='lg:hidden w-[30rem] h-[35rem] max-md:h-[25rem] max-md:w-[20rem] bg-white rounded-[3rem]  flex flex-col shadow-lg'>
            <div className='h-2/6 max-md:hidden'>
                <img src={loginImage} alt="" className='h-[100%] w-full object-cover rounded-t-[3rem] shadow-lg' />

                
            </div>

            <div className='h-4/6 w-full flex flex-col items-center p-2 '>
                 <div>
                    <h1 className='text-center text-3xl font-bold text-green-600'>Welcome Back!</h1>
                    <p className='text-gray-600 text-md'>Please log in to your account to continue.</p>
                </div>

                <form action="/" className='flex flex-col w-[90%]' onSubmit={handleSubmit}>
                   <Input name={"email"} type={"email"} placeholder={"eg: JohnDoe@example.com"} required={true} label={"Email"} onchange={handleChange}/>
                   <Input name={"password"} type={"password"} placeholder={"eg: **********"} required={true} label={"Password"} onchange={handleChange}/>

                   <button className='w-full bg-green-600 hover:bg-green-500 transition-all text-white rounded-full p-2 shadow-lg  duration-500 mb-3'>
                          Login
                   </button>
                </form>

                <div className='text-gray-900 text-center '>
                    Forgot Password? <a href="#" className='text-green-600'>Click here</a> to reset your password.
                </div>

                <p className='text-gray-600 text-md'>Do not have an account ? <a href="register" className='text-green-600'>
                {loading ? <LoaderCircle className='animate-spin mx-auto'/> : "Login"}
                    </a></p>

            </div>

        </div>
    </div>
  )
}

export default Login