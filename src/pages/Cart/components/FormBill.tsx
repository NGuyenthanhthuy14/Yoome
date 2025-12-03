const FormBill = () => {
	return (
		<div className="w-full max-w-sm mt-2">
			<form className="flex flex-col gap-2">
				<div>
					<select
						className="w-full h-12 border border-gray-300 px-3 text-base rounded-none focus:border-pink-500 focus:ring-pink-500 outline-none"
						defaultValue="uk"
					>
						<option value="ae">United Arab Emirates</option>
						<option value="uk">United Kingdom (UK)</option>
						<option value="us">United States (US)</option>
						<option value="us-mi">United States (US) Minor Outlying Islands</option>
						<option value="uy">Uruguay</option>
						<option value="uz">Uzbekistan</option>
					</select>
				</div>
				<input
					type="text"
					placeholder="County"
					className="w-full h-12 border border-gray-300 px-3 text-base rounded-none focus:border-pink-500 focus:ring-pink-500 outline-none"
				/>
				<input
					type="text"
					placeholder="Town / City"
					className="w-full h-12 border border-gray-300 px-3 text-base rounded-none focus:border-pink-500 focus:ring-pink-500 outline-none"
				/>
				<input
					type="text"
					placeholder="Postcode"
					className="w-full h-12 border border-gray-300 px-3 text-base rounded-none focus:border-pink-500 focus:ring-pink-500 mb-1 outline-none"
				/>
				<div className="text-white mt-4">
					<button
						type="button"
						className="w-30 h-10 bg-black  font-semibold tracking-wide rounded-none hover:bg-pink-500 duration-500"
					>
						UPDATE
					</button>
				</div>

			</form>
		</div>
	);
};

export default FormBill;
