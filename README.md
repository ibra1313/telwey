# telwey
Я создаю веб-приложение FLOW — дневник эмоционального коучинга для детей в спорте.

Стек: Next.js 14 (App Router), TypeScript, Tailwind CSS, Supabase (auth + database), Claude API (anthropic SDK), Vercel (деплой).

Создай полную структуру проекта:

/app
  /auth — страницы входа/регистрации
  /onboarding — выбор возраста и вида спорта
  /journal — главный экран дневника (ежедневная сессия)
  /profile — профиль ребёнка, трофеи, статистика
  /parent — панель родителя (отдельный роут, отдельная роль)
  /api
    /session — создание новой сессии дневника
    /answer — сохранение ответа
    /weekly-letter — генерация недельного письма через Claude

/components
  /coach — компонент персонажа "Внутренний тренер" (анимированный аватар)
  /question-card — карточка вопроса с типами: выбор / слайдер / голос / текст
  /trophy — визуализация накопленных очков
  /emotion-wheel — колесо эмоций для выбора состояния

/lib
  /supabase — клиент и типы
  /claude — обёртка над API с промптами
  /questions — банк вопросов по возрасту и виду спорта

Таблицы Supabase:
- users (id, role: child|parent, age_group, sport, parent_id)
- sessions (id, user_id, date, sport_context, completed)
- answers (id, session_id, question_id, answer_type, answer_value, emotion_score)
- weekly_letters (id, user_id, week_start, content, insights_json)
- trophies (id, user_id, type, earned_at, points_total)

Сначала создай структуру папок и базовые файлы. Не пиши весь код сразу — жди моих следующих команд по каждому модулю.
