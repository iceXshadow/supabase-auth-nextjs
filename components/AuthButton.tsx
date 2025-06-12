const AuthButton = ({
	type,
	loading,
}: {
	type: "login" | "Sign up" | "Reset Password" | "Forgot Password";
	loading: boolean;
}) => {
	return (
		<button
			disabled={loading}
			type="submit"
			className={`${
				loading ? "bg-gray-600" : "bg-blue-600"
			} w-full rounded-md px-12 py-3 text-sm font-medium text-white`}
		>
			{loading ? "Loading..." : type}
		</button>
	);
};

export default AuthButton;
