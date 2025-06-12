import SignUpForm from "@/components/SignUpForm";
import Link from "next/link";

const SignUp = async () => {
	return (
		<div className="mt-20 flex w-full justify-center">
			<section className="flex w-[400px] flex-col">
				<h1 className="mb-6 w-full text-center text-3xl font-bold">Sign Up</h1>
				<SignUpForm />
				<div className="mt-2 flex items-center">
					<h1>Already have an account?</h1>
					<Link className="ml-2 font-bold" href="/login">
						Sign In
					</Link>
				</div>
			</section>
		</div>
	);
};

export default SignUp;
