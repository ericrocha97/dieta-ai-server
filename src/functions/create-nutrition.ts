import { model } from "../lib/gemini";

interface CreateNutritionRequest {
	name: string;
	weight: string;
	height: string;
	age: string;
	gender: string;
	objective: string;
	level: string;
}

export async function createNutrition({
	name,
	weight,
	height,
	age,
	gender,
	objective,
	level,
}: CreateNutritionRequest) {
	try {
		const prompt = `Crie uma dieta completa para uma pessoa com nome: ${name} do sexo ${gender} com peso atual: ${weight}kg, altura: ${height}, idade: ${age} anos e com foco e objetivo em ${objective}, atualmente nível de atividade: ${level} e ignore qualquer outro parametro que não seja os passados, retorne em json com as respectivas propriedades, propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, propriedade altura, propriedade peso, propriedade objetivo com o objetivo atual, propriedade refeições com uma array contendo dentro cada objeto sendo uma refeição da dieta e dentro de cada refeição a propriedade horário com horário da refeição, propriedade nome com nome e a propriedade alimentos com array contendo os alimentos dessa refeição e pode incluir uma propreidade como suplementos contendo array com sugestão de suplemento que é indicado para o sexo dessa pessoa e o objetivo dela e não retorne nenhuma observação alem das passadas no prompt, retorne em json e nenhuma propriedade pode ter acento.`;

		const result = await model.generateContent(prompt);

		let data = {};

		if (result.response.candidates) {
			const jsonText = result.response.candidates[0]?.content.parts[0]
				.text as string;

			const jsonString = jsonText
				.replace(/```\w*\n/g, "")
				.replace(/\n```/g, "")
				.trim();

			const jsonObject = JSON.parse(jsonString);
			console.log(jsonObject);
			data = jsonObject;
		}
		return { data };
	} catch (error) {
		console.error("Error creating nutrition:", error);
		throw error;
	}
}
