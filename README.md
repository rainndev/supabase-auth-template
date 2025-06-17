# Supabase Auth Template

A minimal authentication template built with React and Supabase — ideal for quick setups, basic auth workflows, and testing environments.

## Tech Stack

- [React](https://reactjs.org/) — UI Library
- [Supabase](https://supabase.com/) — Backend as a Service
- [React Router DOM](https://reactrouter.com/) — Client-side Routing
- TypeScript (optional but supported)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rainndev/supabase-auth-template.git
cd supabase-auth-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Supabase

1. Create a project at [Supabase](https://supabase.com/).
2. Navigate to `Settings > API` to get your **Project URL** and **anon/public key**.
3. Create a `.env` file in the root directory and add:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run the Development Server

```bash
npm run dev
```
