export default function useFetchTeamData({ params }) {
  return fetch(`https://api.balldontlie.io/v1/teams/${params.teamId}`);
}
