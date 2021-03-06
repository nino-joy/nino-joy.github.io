module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				white: "0 25px 25px -15px rgba(255, 255, 255, 0.2)",
				"white-xl": "0 10px 30px -12px rgba(255, 255, 255, 0.4)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
