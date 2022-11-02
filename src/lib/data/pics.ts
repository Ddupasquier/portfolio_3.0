import wonton from '$lib/assets/wonton.webp';
import bierschtadt from '$lib/assets/bierschtadt.webp';
import smithrock from '$lib/assets/smithrock.webp';
import climbing from '$lib/assets/climbing.webp';

interface Pics {
	kind: string;
	title: string;
	src: string;
}

export const pics: Pics[] = [
	{
		kind: 'image',
		title: 'Wonton',
		src: wonton
	},
	{
		kind: 'image',
		title: 'Climbing',
		src: climbing
	},
	{
		kind: 'image',
		title: 'Bierschtadt',
		src: bierschtadt
	},
	{
		kind: 'image',
		title: 'Smith Rock',
		src: smithrock
	}
];
