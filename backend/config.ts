const isProduction = process.env.NODE_ENV === "production"

export const config = {
	port: process.env.PORT || 3000,
	isProduction,
	isDev: !isProduction,
}
