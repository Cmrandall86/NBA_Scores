export default function useFetchTeamData({ params }) {
  return fetch(`https://www.balldontlie.io/api/v1/teams/${params.teamId}`);
}
