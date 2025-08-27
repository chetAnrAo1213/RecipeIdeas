function Home() {
  return (
    <div>
  <h5 className="mb-2 text-center">Task 3: Recipe Ideas</h5>
  <h5 className="mb-2">Challenge :</h5>
  <p>
    Taylor loves helping in the kitchen after coming home. He may want to cook 
    based on the ingredients he already has, the time available, or simply what 
    he’s in the mood for. Sometimes he also wants to avoid certain ingredients. 
    This task is about providing him with recipe suggestions tailored to his needs.
  </p>
  
  <h6 className="mb-2">Provided API :  
    <a href="https://www.themealdb.com" target="_blank" rel="noopener noreferrer"> TheMealDB.com </a>
  </h6>
  <hr />
  <h5>Why choose Task-3 :</h5>
  <p>Taylor's requirement is to help "find an FoodRecipe". <br />
  The provided API's documentation is well suitable for this task to develop an application for Taylor. <br />
  Documentation provides various "QueryParameters" which was necessary/needed to construct an proper application for his needs.</p>
  <hr />
  <h5>Approach Used :</h5>
  <p>Unauthenticated/Unauthorized Http call using Axios package to the Provided API. <br />
  Fetched the data using respected url and display the necessary details which were needed to accomplish the task.</p>
</div>

  );
}

export default Home;
