import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const getHealthRoute: FastifyPluginAsyncZod = async (app) => {
	app.get("/health", async () => {
		return { status: "UP" };
	});
};
