DO $$ BEGIN
 CREATE TYPE "public"."user_role" AS ENUM('ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" varchar(64) NOT NULL,
	"email" varchar(128) NOT NULL,
	"first_name" varchar(128),
	"last_name" varchar(128),
	"user_role" "user_role" DEFAULT 'USER' NOT NULL,
	"created_at" timestamp (3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp (3) with time zone,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "clerk_id_idx" ON "users" USING btree ("clerk_id");