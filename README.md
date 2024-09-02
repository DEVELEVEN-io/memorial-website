# Project Setup + Backend

## How to install

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Run the development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Environment Variables

Create a new project on [Google Cloud Provider](https://console.cloud.google.com/).
Then `Credentials >> Create Credentials >> OAuth client ID >> Set Application type to web application`

Now add two Authorized redirect URIs

For development:

```text
http://localhost:3000/api/auth/callback/google
```

For production:

```text
https://yourproductionsite.app/api/auth/callback/google
```

Finally from `OAuth 2.0 Client IDs` copy your Client ID and Client secret and add them to your hidden .env file.

> **Note:**
> Your .env file should my ignored by git.

## Setup your PostgresSQL Database

I used [xata.io](https://xata.io/) set up my database.
For xata.io sign in then `Add Database >> Make sure Enable direct access to Postgres is checked >> then Create`

Finally from the Settings grab the postgres endpoint and add an API Key `postgresql://ws1234:xau_apikey123456@us-east-1.sql.xata.sh:5432/Games:main?sslmode=require`

### Generate a random secret for `NEXT_PUBLIC_CRUD_API_KEY` (Base64 encoded)

```bash
openssl rand -hex 16
```

### For `AUTH_SECRET` (44 characters long)

```bash
openssl rand -base64 33
```

### For NEXTAUTH_SECRET (44 characters long)

```bash
openssl rand -base64 32
```

## Set up your Environment Variables

```bash
NEXT_PUBLIC_CRUD_API_KEY=<your_crud_api_key>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>
DATABASE_URL=<your_database_url>
AUTH_SECRET=<your_auth_secret>
NEXTAUTH_SECRET=<your_nextauth_secret>
```

## Prisma ORM with PostgresSQL

To push your database with latest Schema run:

```bash
npx prisma db push
```

## Front end Rules

These rules guide our frontend development to ensure simplicity, readability, and maintainability.

### 1. **Use Tailwind CSS for Styling**

- **Maximize Tailwind CSS:** Use Tailwind CSS for all styling tasks as much as possible.
  - **Fallback to CSS:** Only use standard CSS if something cannot be achieved with Tailwind.

### 2. **Keep It Simple**

- **Avoid Overcomplication:** Do not overcomplicate the codebase with so-called best practices. Prioritize simplicity.

### 3. **Use Prettier Formatter**

- **Prettier:** Use Prettier Vscode extention for formatting everything.
  - use "_prettier-plugin-tailwindcss_" vscode plugin for formatting tailwind utility classes.

### 3. **Consistency Over Perfection**

- **Consistent Style:** Aim for a consistent coding style across the project. Consistent, slightly imperfect code is better than perfect but inconsistent patterns.
