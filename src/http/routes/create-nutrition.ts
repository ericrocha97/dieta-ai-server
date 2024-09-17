import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { createNutrition } from "../../functions/create-nutrition";

export const createNutritionRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/create-nutrition",
		{
			schema: {
				body: z.object({
					name: z.string(),
					weight: z.string(),
					height: z.string(),
					age: z.string(),
					gender: z.string(),
					objective: z.string(),
					level: z.string(),
				}),
			},
		},
		async (request) => {
			const { name, weight, height, age, gender, objective, level } =
				request.body;

			const { data } = await createNutrition({
				name,
				weight,
				height,
				age,
				gender,
				objective,
				level,
			});

			return { data };
		},
	);
};
