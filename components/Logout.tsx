"use client";
import React, { useState } from "react";

const Logout = () => {
	const [loading, setLoading] = useState(false);

	const handleLogout = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);

		setLoading(false);
	};

	return (
		<div className="cursor-pointer rounded-md bg-gray-600 px-4 py-2 text-sm text-white">
			<form onSubmit={handleLogout}>
				<button type="submit" disabled={loading}>
					{loading ? "Signing out..." : "Sign out"}
				</button>
			</form>
		</div>
	);
};

export default Logout;
