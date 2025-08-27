import { Button, Card, Form, Container, Row, Col, Placeholder } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function SearchByName() {
  const [item, setItem] = useState("");
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const fetchMealByitem = async () => {
    setLoading(true); 
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`
      );
      const data = response.data.meals;
      if (data) {
        setMeal(data);
        setError("");
      } else {
        setMeal([]);
        setError("No recipes found for this name.");
      }
    } catch (err) {
      console.error("Error fetching meal:", err);
      setMeal([]);
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div className="container my-4 ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body bg-dark text-light">
                <h5 className="card-title text-center mb-3">Search Recipe</h5>

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <Form.Control
                    placeholder="Recipe Name"
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                  />
                  <Button
                    variant="info"
                    onClick={() => {
                      fetchMealByitem();
                      setItem("");
                    }}
                  >
                    Search
                  </Button>
                </div>

                <small className="mt-3 mb-3 d-block text-center text-light">
                  Examples: Chicken, Beef, Seafood, Pasta, Salad
                </small>
                <span className="text-info small me-3">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  Name based Search
                </span>
                <span className="text-warning small me-3">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  May Could Not Provide An Source
                </span>
                <span className="text-danger small me-3">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Internet Connection Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="my-4">
        {error && <p className="text-center text-danger">{error}</p>}

        {loading ? (
          
          <Row className="g-4 justify-content-center">
            {[...Array(6)].map((_, idx) => (
              <Col key={idx} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  
                  <Placeholder animation="glow">
                    <div
                      style={{ height: "200px", width: "100%", borderRadius: "0.25rem", backgroundColor: "#e0e0e0" }}
                    />
                  </Placeholder>

                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Subtitle} animation="glow">
                      <Placeholder xs={4} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={12} />
                      <Placeholder xs={12} />
                      <Placeholder xs={8} />
                    </Placeholder>
                    <div className="d-flex justify-content-around mt-3">
                      <Placeholder.Button variant="danger" xs={5} />
                      <Placeholder.Button variant="primary" xs={5} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : meal && meal.length > 0 ? (
          <Row className="g-4 justify-content-center">
            {meal.map((i) => (
              <Col key={i.idMeal} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={i.strMealThumb}
                    alt={i.strMeal}
                    className="img-fluid"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">{i.strMeal}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center">
                      Category: {i.strCategory} | Origin: {i.strArea}
                    </Card.Subtitle>
                    <Card.Text style={{ maxHeight: "150px", overflowY: "auto" }}>
                      <h6>Instructions :</h6>
                      {i.strInstructions}
                    </Card.Text>
                    <div className="d-flex justify-content-around mt-3">
                      {i.strYoutube && (
                        <Button
                          variant="outline-danger"
                          href={i.strYoutube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-youtube me-2"></i>Youtube
                        </Button>
                      )}
                      {i.strSource && (
                        <Button
                          variant="outline-primary"
                          href={i.strSource}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-solid fa-globe me-2"></i>Source
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          !error && <p className="text-center">Search for a recipe above!</p>
        )}
      </Container>
    </>
  );
}

export default SearchByName;
