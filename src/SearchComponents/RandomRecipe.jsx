import { Button, Card, Container, Row, Col, Placeholder } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomRecipe() {
  const [meal, setMeal] = useState();

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const randomMeal = response.data.meals[0];
        setMeal(randomMeal);
      } catch (error) {
        console.error("Error fetching random meal:", error);
        setMeal(null);
      }
    };
    fetchRandomMeal();
  }, []);

  return (
    <>
    <h4 className="text-center">Random Dishes By API</h4>
    <p className="text-center text-muted">Resets on Refersh</p>
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={11} lg={12}>
          {meal ? (
            <Card className="shadow-lg p-3 bg-dark text-light">
              <Row className="g-3">
                <Col md={4} className="d-flex align-items-center">
                  <Card.Img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="img-fluid rounded-start"
                  />
                </Col>

                <Col md={8}>
                  <Card.Body className="p-3 ">
                    <Card.Title className="text-center mb-2">
                      {meal.strMeal}
                    </Card.Title>

                    <Card.Subtitle className="mb-2  text-center">
                      Category: {meal.strCategory} | Origin: {meal.strArea}
                    </Card.Subtitle>

                    <Card.Text
                      className="p-2"
                      style={{ maxHeight: "220px", overflowY: "auto" }}
                    >
                      <h6>Recipe Instructions:</h6>
                      {meal.strInstructions}
                    </Card.Text>

                    <div className="d-flex justify-content-around mt-3">
                      <Button
                        variant="outline-danger"
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noreferrer"
                        className="me-5"
                      >
                        <i className="fa-brands fa-youtube me-2"></i>
                        Youtube
                      </Button>
                      <Button
                        variant="outline-primary"
                        href={meal.strSource}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-solid fa-globe me-2"></i>
                        Source
                      </Button>
                      
                    </div>
                   
                  </Card.Body>
                </Col>
              </Row>
              
            </Card>
          ) : (
           
            <Card className="shadow-lg p-3">
              <Row className="g-3">
                <Col md={4}>
                  <Placeholder as={Card.Image} animation="glow">
                    <Placeholder xs={12} style={{ height: "200px" }} />
                  </Placeholder>
                </Col>
                <Col md={8}>
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
                </Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default RandomRecipe;
