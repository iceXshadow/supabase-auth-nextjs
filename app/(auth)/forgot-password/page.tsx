import ForgotPassword from "@/components/ForgotPassword";

export default function ForgotPasswordPage() {
	return (
		<>
			<div className="mt-20 flex w-full justify-center">
				<section className="flex w-[400px] flex-col">
					<h1 className="mb-6 w-full text-center text-3xl font-bold">Forgot Password</h1>
					<ForgotPassword />
				</section>
			</div>
		</>
	);
}
