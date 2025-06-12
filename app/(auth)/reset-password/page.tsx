import ResetPassword from "@/components/ResetPassword";

export default function ResetPasswordPage() {
	return (
		<>
			<div className="mt-20 flex w-full justify-center">
				<section className="flex w-[400px] flex-col">
					<h1 className="mb-6 w-full text-center text-3xl font-bold">Reset Password</h1>
					<ResetPassword />
				</section>
			</div>
		</>
	);
}
