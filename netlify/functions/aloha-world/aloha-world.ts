import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const currentDate = new Date();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Aloha World: ${currentDate}`,
    }),
  }
}
