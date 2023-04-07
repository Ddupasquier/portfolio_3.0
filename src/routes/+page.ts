import { request } from 'graphql-request';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const query = `
query {
  viewer {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}
`;


export async function load() {
      try {
            const token = import.meta.env.VITE_GITHUB_TOKEN;
            const headers = {
                  'Authorization': `bearer ${token}`,
            };
            const data = (await request(GITHUB_GRAPHQL_API, query, {}, headers)) as ContributionData;

            if (data) {
                  const weeks = data.viewer.contributionsCollection.contributionCalendar.weeks;
                  const dailyContributions = weeks.flatMap((week) => week.contributionDays);

                  return {
                        totalContributions: data.viewer.contributionsCollection.contributionCalendar.totalContributions,
                        dailyContributions,
                  };
            } else {
                  throw new Error('Failed to load data');
            }
      } catch (error) {
            console.error('Error fetching commit history data:', error);
            return {
                  status: 500,
                  error: 'Failed to load commit history data',
            };
      }
}

