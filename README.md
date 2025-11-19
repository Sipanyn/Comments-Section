# 🗨️ Comments Section

A modular, scalable comment and reply system built with **React**, **Supabase**, and **React Query**. This project demonstrates relational data modeling, animated loaders, accessible UI components, and robust error handling — perfect for modern web apps that need interactive user feedback.

## 🚀 Features

- 🧵 Nested replies linked to parent comments via Supabase foreign keys
- ⚡ Modular React Query hooks for fetching and mutating data
- 🎨 Accessible, polished UI with animated loaders and disabled states
- 🛠️ Graceful error handling and empty state UX
- 📦 Supabase backend with GUI-based relational table management

## 🧩 Tech Stack

| Frontend       | Backend      | State & Data              | Styling       |
|----------------|--------------|---------------------------|---------------|
| React + Vite   | Supabase     | React Query + Zustand     | CSS Modules   |

## 🗃️ Database Schema

- `comments`: Top-level comments
- `replies`: Replies linked to `comments` via `comment_id`
- Relationships managed visually in Supabase Table Editor

## 📸 UI Highlights

- Animated spinners during fetches
- Accessible buttons with disabled states
- Responsive layout for nested threads

## 🛠️ Getting Started

```bash
git clone https://github.com/Sipanyn/Comments-Section
cd Comments-Section
npm install
npm run dev
