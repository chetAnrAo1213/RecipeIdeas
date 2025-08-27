import { Card, Container, Row, Col, Placeholder } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchCategory() {
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = response.data.categories;
        if (data) {
          setMeal(data);
          setError("");
        } else {
          setMeal([]);
          setError("No categories found.");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setMeal([]);
        setError("Failed to fetch categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);


  const skeletonCards = Array.from({ length: 6 }).map((_, idx) => (
    <Col key={idx} xs={12} md={6} lg={4}>
      <Card className="h-100 shadow-sm">
        <div style={{ height: "200px", background: "#e9ecef" }} />
        <Card.Body>
          <Placeholder as={Card.Title} animation="wave">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="wave">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container className="my-4">
      {error && <p className="text-center text-danger">{error}</p>}
      
      <h5 className="text-center">List of Categories</h5>
      <p className="text-center">Provided By API</p>

      <Row className="g-4 justify-content-center">
        {loading
          ? skeletonCards
          : meal.map((i) => (
              <Col key={i.idCategory} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={i.strCategoryThumb}
                    alt={i.strCategory}
                    className="img-fluid"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      {i.strCategory}
                    </Card.Title>
                    <Card.Text
                      style={{ maxHeight: "150px", overflowY: "auto" }}
                    >
                      {i.strCategoryDescription}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
}

export default SearchCategory;
