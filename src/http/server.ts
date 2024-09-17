import fastify from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
import { createNutritionRoute } from "./routes/create-nutrition";
import { getHealthRoute } from "./routes/get-health";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler((error, request, reply) => {
	reply.code(500).send({ message: error.message });
});

app.register(createNutritionRoute);
app.register(getHealthRoute);

app
	.listen({
		port: 3333,
		host: "0.0.0.0",
	})
	.then(() => {
		console.log("HTTP server running!");
	});
