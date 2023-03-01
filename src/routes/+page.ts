import { Octokit } from 'octokit';

const octokit = new Octokit({
	auth: import.meta.env.VITE_GITHUB_TOKEN
});

export async function load() {
	const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues', {
		owner: 'Ddupasquier',
		repo: 'stories-client'
	});

      if (data) {
            return data;
      } else {
            throw new Error('Failed to load data')
      }
}
