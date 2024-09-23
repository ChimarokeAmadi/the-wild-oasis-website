"use client";

import { log } from "console";
import { useState } from "react";
import { JSXSource } from "react/jsx-dev-runtime";

interface User {
	id: number;
	name: string;
	username: string;
}

const Counter = ({ users }: { users: User[] }) => {
	const [count, setCount] = useState(0);
	console.log(users.length);

	return (
		<div>
			<p>There's {users.length} people on the list</p>
			<button onClick={() => setCount((c) => c + 1)}>{count}</button>
		</div>
	);
};

export default Counter;
