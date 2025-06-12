"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";

const ForgotPassword = () => {
	const [error, setError] = useState<string | null>(null);
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

				<div className="mt-4">
					<AuthButton type="Forgot Password" loading={loading} />
				</div>
				{error && <p className="text-red-500">{error}</p>}
			</form>
		</div>
	);
};

export default ForgotPassword;
