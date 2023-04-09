import {Ass, Pokemon, Ss, Np, Pinched, Mysvelteui, gitCal} from '$lib/assets';

export interface Project {
	kind: string;
	title: string;
	description: string;
	when: string;
	links: {
		github?: string | null;
		live?: string | null;
	};
	tech: string[];
	src: string | null;
}

export const projects: Project[] = [
	{
		kind: 'proj',
		title: 'AntiSocialSuite',
		description:
			'A social media management tool to increase the engagement rate across multiple social media accounts. Driving towards a subscription-based SaaS',
		when: 'June 2022 - Present',
		links: {
			github: 'https://github.com/Ddupasquier/instaassistant-client',
			live: 'https://www.antisocialsuite.io'
		},
		tech: [
			'React.js',
			'JavaScript',
			'SCSS',
			'NextUI',
			'Ruby on Rails',
			'PostgreSQL',
			'AWS',
			'Heroku',
			'Netlify',
			'JWT',
			'BCrypt',
			'Selenium',
			'Git',
			'Github'
		],
		src: Ass
	},
	{
		kind: 'proj',
		title: 'SimpleStyles',
		description:
			'Utility library to ease developer workflow when building React apps, allowing for the easy search and use of common React components, saving significant development time.',
		when: 'April 2022',
		links: {
			github: 'https://github.com/Ddupasquier/phase-5-cssreact-library'
		},
		tech: [
			'React.js',
			'Ruby on Rails',
			'PostgreSQL',
			'HTML',
			'CSS',
			'JavaScript',
			'SCSS',
			'Git',
			'Github',
			'Heroku',
			'Postman',
			'BCrypt'
		],
		src: Ss
	},
	{
		kind: 'proj',
		title: 'PokeDex',
		description: 'A vanilla JS app to display a list of Pokemon.',
		when: 'December 2021',
		links: {
			github: 'https://github.com/Ddupasquier/Pokedex-1.0',
			live: 'https://6362f7ed703cd919c5788baf--effortless-heliotrope-bba751.netlify.app/'
		},
		tech: ['JavaScript', 'HTML', 'SCSS', 'Git', 'Github', 'Heroku'],
		src: Pokemon
	},
	{
		kind: 'proj',
		title: 'National Parks',
		description: 'A React app to display a list of National Parks.',
		when: 'March 2022',
		links: {
			github: 'https://github.com/Ddupasquier/phase-4-project-mincho-dylandupasquier'
		},
		tech: [
			'React.js',
			'Ruby on Rails',
			'PostgreSQL',
			'HTML',
			'CSS',
			'JavaScript',
			'Git',
			'Github',
			'Heroku',
			'Postman',
			'BCrypt'
		],
		src: Np
	},
	{
		kind: 'proj',
		title: 'Pinched Parables',
		description:
			'Get creative with Pinched Parables - the ultimate story book creator for kids! Stamp your way to an exciting adventure with our crab-tivating collection of stamps. Join the shell-abration of imagination and storytelling today!',
		when: 'December 2022 - Present',
		links: {
			live: 'https://stories-client.vercel.app/'
		},
		tech: [
			'SvelteKit',
			'Supabase',
			'PostgreSQL',
			'HTML',
			'CSS',
			'Typescript',
			'Git',
			'Github',
			'Vercel'
		],
		src: Pinched
	},
	{
		kind: 'proj',
		title: 'MySvelteUI',
		description: 'An open source UI library for SvelteKit, built with Svelte and TypeScript.',
		when: 'February 2023 - Present',
		links: {
			github: 'https://github.com/Ddupasquier/mysvelte_ui',
			live: 'https://www.npmjs.com/package/mysvelte-ui?activeTab=readme'
		},
		tech: ['SvelteKit', 'SCSS', 'Typescript', 'Git', 'Github', 'Vercel', 'NPM'],
		src: Mysvelteui
	},
	{
		kind: 'proj',
		title: 'github-commit-calendar',	
		description: 'A Svelte component to display a user\'s Github commit calendar.',
		when: 'April 2023',
		links: {
			live: 'https://www.npmjs.com/package/github-commit-calendar'
		},
		tech: ['SvelteKit', 'SCSS', 'Typescript', 'Git', 'Github', 'Github Pages', 'NPM'],
		src: gitCal
	}
];
