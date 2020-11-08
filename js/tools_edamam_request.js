function initRequest() {
  const APP_ID = "e0b982c7";
  const APP_KEY = "2ab29d71baf4e2bccdd82bec22e9955d";
  let datasArr = [];
  let query = "orange";

  const getEdamamRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    datasArr = data.hits;
    console.log("datasArr:", datasArr);
  };

  getEdamamRecipes();
}

// initRequest();

// export default initRequest;
