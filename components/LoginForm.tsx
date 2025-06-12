"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
// import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [error, setError] = useState<string | null>(null);
	// const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setError(null);

		setLoading(false);
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
				<div>
					<label className="block text-sm font-medium text-gray-200">Email</label>
					<input
						type="email"
						placeholder="Email"
						id="Email"
						name="email"
						className="mt-1 h-10 w-full rounded-md border border-gray-200 bg-white p-2 px-4 text-sm text-gray-700"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-200">Password</label>
					<input
						type="password"
						placeholder="Password"
						name="password"
						id="password"
						className="mt-1 h-10 w-full rounded-md border border-gray-200 bg-white p-2 px-4 text-sm text-gray-700"
					/>
				</div>
				<div className="mt-4">
					<AuthButton type="login" loading={loading} />
				</div>
				{error && <p className="text-red-500">{error}</p>}
			</form>
		</div>
	);
};

export default LoginForm;
