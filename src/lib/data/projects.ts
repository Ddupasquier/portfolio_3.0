import ass from '$lib/assets/ass.webp';
import pokemon from '$lib/assets/pokemon.webp';
import ss from '$lib/assets/ss.webp';
import np from '$lib/assets/np.webp';

export interface Project {
	kind: string;
	title: string;
	description: string;
      when: string;
	links: {
		github: string | null;
		live: string | null;
	};
	tech: string[];
	src: string | null;
}

export const projects: Project[] = [
	{
		kind: 'proj',
		title: 'AntiSocialSuite',
		description:
			'A social media management tool for increasing engagement across social media accounts using a tool to automate common interactions to reduce time spent across platforms up to 80%.',
                  when: 'Aug 2022 - Present',
		links: {
			github: 'https://github.com/Ddupasquier/instaassistant-client',
			live: 'Under Construction'
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
			live: 'https://simplestyles.herokuapp.com/'
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
		description: 'A React app to display a list of Pokemon.',
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
			live: 'https://national-parks-fi.herokuapp.com/'
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
	
	// {
	// 	title: 'MarketProphit',
	// 	description: 'Headed front-end development of a cryptocurrency marketing platform',
      // when: '2020',
	// 	links: {
	// 		github: '',
	// 		live: ''
	// 	},
	// 	tech: ['Svelte', 'SvelteKit', 'SCSS', 'Cheerio', 'D3', 'Chart.js', 'Javascript', 'HTML5'],
	// 	src: ass
	// }
];
