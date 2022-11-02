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
	}
];
