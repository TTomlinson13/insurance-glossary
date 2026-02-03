CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(255) NOT NULL,
	`title` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`author` varchar(255) NOT NULL DEFAULT 'Insurance Glossary Team',
	`publishedDate` timestamp NOT NULL DEFAULT (now()),
	`category` varchar(100) NOT NULL,
	`readTime` varchar(50) NOT NULL,
	`relatedTerms` text NOT NULL,
	`seoKeywords` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
