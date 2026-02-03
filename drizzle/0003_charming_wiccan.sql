CREATE TABLE `newsletter_subscribers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`status` enum('active','unsubscribed') NOT NULL DEFAULT 'active',
	`source` varchar(50) NOT NULL,
	`subscribedAt` timestamp NOT NULL DEFAULT (now()),
	`unsubscribedAt` timestamp,
	CONSTRAINT `newsletter_subscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletter_subscribers_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `term_ratings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`termSlug` varchar(255) NOT NULL,
	`rating` int NOT NULL,
	`userId` int,
	`sessionId` varchar(255),
	`ipAddress` varchar(45),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `term_ratings_id` PRIMARY KEY(`id`)
);
