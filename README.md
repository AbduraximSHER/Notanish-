# Task Manager Application

A modern task management web application similar to Microsoft To Do, built with Next.js 14+, TypeScript, PostgreSQL, and Tailwind CSS.

## Features

- 🔐 **Authentication**: JWT-based authentication with secure password hashing
- 📝 **Task Management**: Create, edit, delete, and organize tasks
- 📋 **Lists**: Organize tasks into custom lists with color coding
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- ⚡ **Fast**: Built on Next.js 14+ with App Router
- 🔒 **Secure**: bcrypt password hashing and JWT tokens

## Tech Stack

- **Frontend**: Next.js 14+, React, TypeScript
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with connection pooling
- **Styling**: Tailwind CSS
- **Authentication**: JWT + bcrypt

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- PostgreSQL 12+
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up PostgreSQL database

Create a new PostgreSQL database:

```bash
createdb taskmanager
```

Or use a cloud PostgreSQL provider like:
- [Neon](https://neon.tech)
- [Supabase](https://supabase.com)
- [Railway](https://railway.app)

### 4. Configure environment variables

Copy the `.env.example` file to `.env.local` and update with your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/taskmanager
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Important**: Generate a secure JWT secret for production:
```bash
openssl rand -base64 32
```

### 5. Initialize the database schema

Run the SQL schema file to create the necessary tables:

```bash
psql $DATABASE_URL -f database/schema.sql
```

Or if you're using a connection string:

```bash
psql "postgresql://username:password@localhost:5432/taskmanager" -f database/schema.sql
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /api
    /auth          # Authentication endpoints (login, signup, logout)
    /tasks         # Task CRUD endpoints
    /lists         # List CRUD endpoints
  /components
    TaskItem.tsx   # Individual task component
    TaskList.tsx   # Task list display component
    Sidebar.tsx    # Navigation sidebar component
  /lib
    db.ts          # PostgreSQL connection and query utilities
    auth.ts        # JWT and password hashing utilities
  globals.css      # Global styles
  layout.tsx       # Root layout
  page.tsx         # Home page
/database
  schema.sql       # Database schema
/public            # Static assets
.env.local         # Environment variables (git-ignored)
.env.example       # Environment variables template
```

## Database Schema

### Users Table
- `id`: UUID (Primary Key)
- `email`: String (Unique)
- `password_hash`: String
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Lists Table
- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key → users)
- `name`: String
- `color`: String (Optional)
- `created_at`: Timestamp

### Tasks Table
- `id`: UUID (Primary Key)
- `list_id`: UUID (Foreign Key → lists)
- `user_id`: UUID (Foreign Key → users)
- `title`: String
- `description`: Text (Optional)
- `completed`: Boolean
- `due_date`: Date (Optional)
- `created_at`: Timestamp
- `updated_at`: Timestamp

## API Routes (To be implemented)

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token
- `POST /api/auth/logout` - Logout (clear session)

### Tasks
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Lists
- `GET /api/lists` - Get all lists for authenticated user
- `POST /api/lists` - Create a new list
- `PUT /api/lists/:id` - Update a list
- `DELETE /api/lists/:id` - Delete a list

## Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style

This project uses:
- TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for styling

## Next Steps

1. Implement authentication API endpoints in `app/api/auth`
2. Implement task CRUD endpoints in `app/api/tasks`
3. Implement list CRUD endpoints in `app/api/lists`
4. Create authentication pages (login, signup)
5. Build the main dashboard with task management UI
6. Add real-time features or additional functionality

## Security Considerations

- All passwords are hashed using bcrypt before storage
- JWT tokens are used for authentication
- SQL injection protection via parameterized queries
- Environment variables for sensitive data
- HTTPS recommended for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Support

For issues and questions, please create an issue in the GitHub repository.
