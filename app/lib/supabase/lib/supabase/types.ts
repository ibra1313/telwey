export type Role = 'child' | 'parent'
export type AgeGroup = '6-9' | '10-13' | '14-17'

export interface User {
  id: string
  role: Role
  age_group: AgeGroup | null
  sport: string | null
  parent_id: string | null
  created_at: string
}

export interface Session {
  id: string
  user_id: string
  date: string
  sport_context: string | null
  completed: boolean
  created_at: string
}

export interface Answer {
  id: string
  session_id: string
  question_id: string
  answer_type: 'choice' | 'slider' | 'voice' | 'text'
  answer_value: string
  emotion_score: number | null
}

export interface WeeklyLetter {
  id: string
  user_id: string
  week_start: string
  content: string
  insights_json: Record<string, unknown>
}

export interface Trophy {
  id: string
  user_id: string
  type: string
  earned_at: string
  points_total: number
}
