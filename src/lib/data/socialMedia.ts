import LinkedinIcon from '$lib/assets/socialIcons/linkedin.svg';
import GithubIcon from '$lib/assets/techIcons/github.svg';

export interface SocialMedia {
	name: string;
	link: string;
	icon: string;
}

export const socialMedias: SocialMedia[] = [
	{
		name: 'Linkedin',
		link: 'https://www.https://www.linkedin.com/in/dylan-dupasquier/',
		icon: LinkedinIcon
	},
	{
		name: 'Github',
		link: 'https://github.com/Ddupasquier',
		icon: GithubIcon
	},
	// {
	// 	name: 'Youtube',
	// 	link: '',
	// 	icon: ':)'
	// },
	// {
	// 	name: 'Codepen',
	// 	link: '',
	// 	icon: ':)'
	// },
	// {
	// 	name: 'Discord',
	// 	link: '',
	// 	icon: ':)'
	// }
];
