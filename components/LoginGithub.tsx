"use client";

import { useTransition } from "react";
import { FaGithub } from "react-icons/fa";

const LoginGithub = () => {
	const [isPending, startTransition] = useTransition();

	const handleGithubLogin = () => {
		startTransition(async () => {
			// await signInWithGithub();
		});
	};
	return (
		<div
			onClick={handleGithubLogin}
			className="mt-6 flex h-12 w-full items-center justify-center gap-4 rounded-md bg-gray-800 p-4 hover:cursor-pointer"
		>
			<FaGithub className="text-white" />
			<p className="text-white">{isPending ? "Redirecting..." : "Login with Github"}</p>
		</div>
	);
};

export default LoginGithub;
