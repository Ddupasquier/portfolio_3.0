export interface Recommendation {
	kind: string;
	description: string;
	who: string;
	when: string;
	where: string;
}

export const recommendations: Recommendation[] = [
	{
		kind: 'rec',
		who: 'Monarch Wadia',
		when: 'September 2022',
		where: 'Folkwise',
		description:
			'I had the pleasure of working with Dylan on an MVP web development project and can attest to his skill as a frontend developer. Dylan is a quick learner and was able to quickly pick up on the project requirements and deliverables. He is also a great communicator and was always very coachable. I would highly recommend Dylan for any future web development projects.'
	},
	{
		kind: 'rec',
		who: 'J. Sergio',
		when: 'March 2023',
		where: 'Tutoring',
		description:
			'I am more of a backend person and when it came to render ring in the front end, Dylan not only taught me how to figure out but why it’s best practice to write any particular code. He is knowledgeable, artistic and self sufficient. I strive to be on his level one day.'
	},
];
