import Link from "next/link";

const Navbar = async () => {
	return (
		<nav className="flex w-full items-center border-b bg-background">
			<div className="my-4 flex w-full items-center justify-between">
				<Link className="font-bold" href="/">
					Home
				</Link>

				<div className="flex items-center gap-x-5">
					<Link href="/private">Private</Link>
				</div>
				<div className="flex items-center gap-x-5">
					<Link href="/login">
						<div className="rounded-sm bg-blue-600 px-4 py-2 text-sm text-white">Login</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
