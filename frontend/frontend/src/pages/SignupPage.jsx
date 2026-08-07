import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

const SignupPage = () => {

    const { register, handleSubmit, formState, reset } = useForm()

    return (
        <form className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-4 w-fit rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]">
            <div className="flex flex-col gap-4 justify-center items-center mb-2">
                <h3 className="font-semibold text-2xl">SignUp Form</h3>
                <p>Create your account to get started!</p>
            </div>

            <div>
                <Label htmlFor="username" className="dark:text-[97989F]">
                    Username
                </Label>
                <Input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    {...register("username", {required: "Username is required", minLength: {value: 3, message: "Username must be at least 3 characters!",},})}
                    className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
            </div>

            <div>
                <Label htmlFor="first_name">First Name</Label>
                <Input
                    type="text"
                    id="first_name"
                    placeholder="Enter first name"
                    className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
            </div>

            <div>
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                    type="text"
                    id="last_name"
                    placeholder="Enter last name"
                    className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
            </div>

            <div>
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
            </div>

            <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
            </div>

            <div className="w-full flex items-center justify-center flex-col my-4">
                <button
                    className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">

                    SignUp
                </button>
                <p className="text-[14px]">
                    Already have an account? Sign in
{/*                     Already have an account? <Link to="/signin">Sign In</Link> */}
                </p>
            </div>
        </form>
    )

}