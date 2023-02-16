import ass from '$lib/assets/ass.webp';
import pokemon from '$lib/assets/pokemon.webp';
import ss from '$lib/assets/ss.webp';
import np from '$lib/assets/np.webp';
import pinched from '$lib/assets/pinched.png';

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
		src: ass
	},
	{
		kind: 'proj',
		title: 'SimpleStyles',
		description:
			'Utility library to ease developer workflow when building React apps, allowing for the easy search and use of common React components, saving significant development time.',
		when: 'April 2022',
		links: {
			github: 'https://github.com/Ddupasquier/phase-5-cssreact-library',
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
		src: ss
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
		src: pokemon
	},
	{
		kind: 'proj',
		title: 'National Parks',
		description: 'A React app to display a list of National Parks.',
		when: 'March 2022',
		links: {
			github: 'https://github.com/Ddupasquier/phase-4-project-mincho-dylandupasquier',
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
		src: np
	},
	{
		kind: 'proj',
		title: 'Pinched Parables',
		description:
			'Get creative with Pinched Parables - the ultimate story book creator for kids! Stamp your way to an exciting adventure with our crab-tivating collection of stamps. Join the shell-abration of imagination and storytelling today!',
		when: 'Dec 2022 - Present',
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
			'Vercel',
		],
		src: pinched
	}
];
