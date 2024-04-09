export default function useFetchTeamData({ params }) {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.balldontlie.io/v1/teams/${params.teamId}`, {
        method: "GET",
        headers: {Authorization: "36ca5646-b610-45e8-9329-1005a9b04a53"},
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Error fetching team data: ${error.message}`);
    }
  };

  return fetchData();
}