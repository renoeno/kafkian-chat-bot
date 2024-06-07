import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";
import { PromptTemplate } from '@langchain/core/prompts'
import { OpenAI } from '@langchain/openai'

const parser = StructuredOutputParser.fromZodSchema(
    z.object({
        response: z.string().describe("Response written in a style similar to Franz Kafka's writing.")
    })
)

const getPrompt = async (question: string) => {
    const format_instructions = parser.getFormatInstructions();

    const prompt = new PromptTemplate({
        template: "Analyze the following question. Answer in a style similar to Franz Kafka's writing. Format your response to match the format instructions, no matter what! \n{format_instructions}\n{question}",
        inputVariables: ['question'],
        partialVariables: {format_instructions}
    })

    const input = await prompt.format({
        question: question
    })

    return input
}

export const analyze = async (question: string) => {
    console.log(question)
    const input = await getPrompt(question)
    const model = new OpenAI({
        model: 'gpt-3.5-turbo',
        temperature: 0
    })

    const result = await model.call(input)

    try {
        console.log(parser.parse(result))
        return parser.parse(result)
    } catch (err) {
        console.error(err)
    }
}