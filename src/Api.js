
async function fetchShows() {
    try {
      const response = await fetch('https://podcast-api.netlify.app/shows');
      const data = await response.json();
      return data.shows;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  export default fetchShows;
  