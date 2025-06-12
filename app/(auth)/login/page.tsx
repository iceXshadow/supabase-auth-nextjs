import LoginForm from "@/components/LoginForm";
import LoginGithub from "@/components/LoginGithub";
import Link from "next/link";

export default function LoginPage() {
	return (
		<>
			<div className="mt-20 flex w-full justify-center">
				<section className="flex w-[400px] flex-col">
					<h1 className="mb-6 w-full text-center text-3xl font-bold">Sign in</h1>
					<LoginForm />
					<LoginGithub />
					<div className="mt-2 flex items-center">
						<h1>{`Don't have an account?`}</h1>
						<Link className="ml-2 font-bold" href="/register">
							Sign Up
						</Link>
					</div>
					<div className="mt-2 flex items-center">
						<h1>{`Forgot your password?`}</h1>
						<Link className="ml-2 font-bold" href="/forgot-password">
							Reset Password
						</Link>
					</div>
				</section>
			</div>
		</>
	);
}
