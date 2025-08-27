import { Button, Card, Form, Container, Row, Col, Placeholder } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

function SearchByCategory() {
  const [category, setCategory] = useState("");
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const fetchMealByCategory = async () => {
    if (!category) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = response.data.meals;
      if (data) {
        setMeal(data);
        setError("");
      } else {
        setMeal([]);
        setError("No recipes found for this category.");
      }
    } catch (err) {
      console.error("Error fetching meals:", err);
      setMeal([]);
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setLoading(false);
      setCategory(""); 
    }
  };

  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body bg-dark text-light">
                <h5 className="card-title text-center mb-3">
                  Search by Category
                </h5>

                <div className="d-flex flex-column flex-sm-row gap-2">
                  <Form.Control
                    placeholder="Enter a category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <Button
                    variant="info"
                    onClick={fetchMealByCategory}
                  >
                    Search
                  </Button>
                </div>

                <small className="mt-2 d-block text-center text-light">
                  Examples: Visit <NavLink to="/category">Categories</NavLink> Page
                </small>

                <span className="text-info small me-3">
                  <i className="fas fa-exclamation-circle me-2"></i>
                  Category Based Search
                </span>
                <span className="text-warning small me-3">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  May not provide a source
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
                      style={{
                        height: "200px",
                        width: "100%",
                        borderRadius: "0.25rem",
                        backgroundColor: "#e0e0e0",
                      }}
                    />
                  </Placeholder>
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <div className="d-flex justify-content-around mt-3">
                      <Placeholder.Button variant="danger" xs={6} />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : meal.length > 0 ? (
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
                    <div className="d-flex justify-content-around mt-3">
                      <Button
                        variant="outline-danger"
                        href={`https://www.youtube.com/results?search_query=${i.strMeal}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-youtube me-2"></i>
                        Youtube
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          !error && <p className="text-center">Search for a category above!</p>
        )}
      </Container>
    </>
  );
}

export default SearchByCategory;
