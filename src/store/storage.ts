export const saveToLocalStorage = (state: any) => {
	try {
		const serialized = JSON.stringify(state);
		localStorage.setItem("cart-data", serialized);
	} catch (e) {
		console.error("Could not save state");
	}
};

export const loadFromLocalStorage = () => {
	try {
		const serialized = localStorage.getItem("cart-data");
		if (serialized === null) return undefined;
		return JSON.parse(serialized);
	} catch (e) {
		return undefined;
	}
};
