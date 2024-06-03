import React from 'react'
import DocumentTitle from '../../utils/DocumentTitle'
import Input from '../../components/Input'
import shirt6 from "../../assets/images/shirt6.jpeg"
import { usePost } from '../../utils/PostData'
import { LoaderCircle } from 'lucide-react'


function Register() {
  const {loading, postData, responseData} = usePost()
  DocumentTitle("Stay Ahead in Style")

  const [formData, setFormData] = React.useState({})


  const handleChange =(e)=>{
    console.log(formData)
   const {name, value} = e.target

   setFormData({
    ...formData, 
    [name]: value
   })
  }

  console.log(responseData)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    postData("/api/v1/register", formData)
   

   }


  return (
    <div className='w-full flex h-screen bg-white justify-center items-center'>

        <div className='w-1/3 max-xl:hidden'>
          <img src={shirt6} alt="" className='object-cover h-screen w-full'/>

        </div>
        


        <div className='w-2/3  max-md:w-full h-screen flex justify-center   items-center'>
          <div className='flex flex-col  md:bg-white md:shadow-lg md:rounded-lg p-5 xl:shadow-none '>
            <div className='text-center'> 
            <h1 className='text-3xl font-semibold capitalize mt-4 '>Be Part of the <span className='text-green-500'>Fashion</span> Elite</h1>
              <p className='text-gray-800 text-md'>Sign up to receive exclusive offers, the latest fashion trends, and more.</p>
            </div>
            

            <form className='flex flex-col mt-8' onSubmit={handleSubmit}>
              <Input type={"text"} required={true} label={"name"} placeholder={"eg: John Doe"} onchange={handleChange} name={"name"}/>

              <Input type={"email"} required={true} label={"email"} placeholder={"eg: JohnDoe@example.com"} onchange={handleChange} name={"email"}/>

              <Input type={"password"} required={true} label={"password"} placeholder={"eg: *************"} onchange={handleChange} name={"password"}/>

              <div className=' mt-3 mb-5 flex justify-center items-center'>
              <input type="checkbox" className='mr-1 accent-green-600' required />
              <div>
              I agree to the <a href="#" className='text-green-500 '>Terms and Conditions</a> <span> and </span> <a href="#" className='text-green-500'>Privacy Policy</a>.
              </div>
              </div>
              
              <button className='w-full p-2 text-white bg-green-600 rounded-full'>
                {loading ? <LoaderCircle className='animate-spin mx-auto'/> : "Sign Up Now"}
              </button>

              <p className='text-center mt-5'>Already have an account? <span className='text-green-500'><a href="/">Log in here</a></span></p>

            </form>
              

          </div>

        </div>


    </div>
  )
}

export default Register