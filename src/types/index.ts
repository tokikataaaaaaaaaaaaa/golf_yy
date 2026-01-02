// Database types will be generated from Supabase
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// User types
export interface User {
  id: string
  email: string
  created_at: string
}

// Profile types
export interface Profile {
  id: string
  user_id: string
  nickname: string
  gender: 'male' | 'female' | 'other'
  prefecture: string
  golf_experience: string
  average_score: string
  bio: string
  avatar_url?: string
  home_course?: string
  created_at: string
  updated_at: string
}

// Round types
export interface Round {
  id: string
  organizer_id: string
  date: string
  time: string
  golf_course: string
  prefecture: string
  capacity: number
  level: 'beginner' | 'intermediate' | 'advanced'
  comment?: string
  budget?: string
  status: 'open' | 'closed' | 'cancelled'
  created_at: string
  updated_at: string
}

// Application types
export interface Application {
  id: string
  round_id: string
  applicant_id: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  updated_at: string
}

// Match types
export interface Match {
  id: string
  round_id: string
  organizer_id: string
  applicant_id: string
  payment_status: 'pending' | 'completed' | 'failed'
  created_at: string
}

// Message types
export interface Message {
  id: string
  match_id: string
  sender_id: string
  content: string
  read_at?: string
  created_at: string
}
