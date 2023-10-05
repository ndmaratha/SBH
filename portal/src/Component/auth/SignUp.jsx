import React, { useState } from "react";
import Customer from "./Customer";
import Login from "./Login"
const SignUp = () => {
	const [data, setData] = useState({
		who: false,
	});
	const [page, setPage] = useState(0);
	const submitHandler = async (e) => {
		e.preventDefault();

		const res = await fetch("http://localhost:8080/signup", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const d = await res.json();
		console.log(d);
		setPage(1);
	};
	const changeHandler = (e) => {
		const { name, value, checked, type } = event.target;
		setData((prev) => {
			return {
				...prev,
				[name]: type === "checkbox" ? checked : value,
			};
		});
		console.log(e.target.name, e.target.value);
	};
	return (
		<div>
			{
				page ==0 ?
			
			<div>
				<h1>What you are?</h1>
				<div>
					<form onSubmit={submitHandler}>
						<div className="flex">
							<p>Enter Your Name : </p>{" "}
							<input type="text" name="name" onChange={changeHandler} />
						</div>{" "}
						<br />
						<p>Enter Your Email : </p>{" "}
						<input type="Email" name="email" onChange={changeHandler} /> <br />
						<select name="who" onChange={changeHandler}>
							<option>Customer</option>
							<option>Provider</option>
						</select>
						<button className="bg-red-500 text-3xl">continue</button>
					</form>
				</div>
			</div>
			:
			<Login/>
			}
		</div>
	);
};

export default SignUp;
