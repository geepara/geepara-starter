# geepara-starter

Starter repo for web apps made by geepara

**Tech Stack**

-   React (Vite)
-   Express (typescript)
-   Clerk
-   Postgres
-   Drizzle ORM
-   Tanstack Query
-   Tailwind CSS
-   shadcn

## Setup

1. Clone this repo

```bash
git clone https://github.com/geepara/geepara-starter.git
```

2. Create `/client/.env.local`

```bash
cp client/.env.example client/.env.local
```

3. Sign into [Clerk](https://clerk.com) to create an app and get the API key

```bash
VITE_CLERK_PUBLISHABLE_KEY=pk_test...
```

4. Create `/server/.env`

```bash
cp server/.env.example server/.env
```

5. Go to the [Clerk Dashboard](https://dashboard.clerk.com) to get the API keys

```bash
CLERK_PUBLISHABLE_KEY=pk_test...
CLERK_SECRET_KEY=sk_test...
```

6. Sign into [Neon](https://neon.tech) or your favorite database provider to create a database and get the database URL

```
DATABASE_URL=postgresql://geepara-starter...
```

7. Generate and push the drizzle schema to the database

```bash
yarn drizzle:generate
yarn drizzle:push
```

8. Initialize the server

```bash
cd server
yarn
yarn dev
```

8. Initialize the client

```bash
cd ../client
yarn
yarn dev
```

9. All done!

## Database Migrations

If you make changes to your drizzle schema:

1. Generate the migration

```bash
yarn drizzle:generate
```

2. Apply the migrations to your database

```bash
yarn drizzle:migrate
```

## Deployment

Coming Soon
