import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export async function generateWeeklyLetter(
  childName: string,
  sport: string,
  answers: { question: string; answer: string }[]
): Promise<string> {
  const answersText = answers
    .map((a) => `Вопрос: ${a.question}\nОтвет: ${a.answer}`)
    .join('\n\n')

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    messages: [
      {
        role: 'user',
        content: `Ты — заботливый эмоциональный коуч для детей-спортсменов.
Напиши тёплое, вдохновляющее письмо ребёнку по имени ${childName}, который занимается ${sport}.
Основывайся на его ответах за неделю:

${answersText}

Письмо должно быть:
- Написано простым, понятным языком для ребёнка
- Поддерживающим и мотивирующим
- Содержать 2-3 конкретных наблюдения из ответов
- Заканчиваться вдохновляющей мыслью
Длина: 150-200 слов.`,
      },
    ],
  })

  return message.content[0].type === 'text' ? message.content[0].text : ''
}
