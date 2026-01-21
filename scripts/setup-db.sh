#!/bin/bash

# Database Setup Script for Task Manager Application
# This script will create the database schema using the connection string from .env.local

set -e  # Exit on error

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "Error: .env.local file not found!"
    echo "Please copy .env.example to .env.local and configure your database connection."
    exit 1
fi

# Source the .env.local file to get DATABASE_URL
export $(grep -v '^#' .env.local | xargs)

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL not found in .env.local"
    exit 1
fi

echo "Setting up database schema..."
echo "Using connection: $DATABASE_URL"

# Run the schema file
psql "$DATABASE_URL" -f database/schema.sql

if [ $? -eq 0 ]; then
    echo "✅ Database schema created successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Run 'npm run dev' to start the development server"
    echo "2. Implement authentication endpoints in app/api/auth"
    echo "3. Build your task management features!"
else
    echo "❌ Error creating database schema"
    exit 1
fi
