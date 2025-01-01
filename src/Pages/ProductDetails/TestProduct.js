import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Badge,
    Dropdown,
} from "react-bootstrap";
import { MdShoppingCart, MdStar, MdStarOutline } from "react-icons/md";

const ProductDetails = ({ productData }) => {
    const [selectedVariation, setSelectedVariation] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const product = productData;

    const handleVariationChange = (variation) => {
        setSelectedVariation(variation);
    };

    const handleQuantityChange = (type) => {
        setQuantity((prev) =>
            type === "increment" ? Math.min(prev + 1, 10) : Math.max(prev - 1, 1)
        );
    };

    const handleAddToCart = () => {
        if (!selectedVariation) {
            alert("Please select a variation before adding to cart.");
            return;
        }

        const cartItem = {
            productId: product._id,
            name: product.name,
            price: selectedVariation.price,
            quantity,
            variation: selectedVariation.variation_title,
        };

        console.log("Added to cart:", cartItem);
        alert("Added to cart successfully!");
    };

    return (
        <Container className="my-4">
            <Row>
                {/* Product Images */}
                <Col md={6}>
                    <Card className="border-0 shadow">
                        <div className="text-center p-4">
                            <img
                                src={
                                    product.featured_image?.link ||
                                    "https://via.placeholder.com/500"
                                }
                                alt={product.name}
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                        <Row className="g-2 p-3">
                            {product.images?.map((image) => (
                                <Col xs={3} key={image._id}>
                                    <img
                                        src={image.link}
                                        alt="Product Thumbnail"
                                        className="img-fluid rounded border"
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>

                {/* Product Details */}
                <Col md={6}>
                    <h2>{product.name}</h2>
                    <Badge bg="success" className="mb-2">
                        {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
                    </Badge>
                    {product.bestSeller && (
                        <Badge bg="warning" className="ms-2">
                            Best Seller
                        </Badge>
                    )}

                    <p
                        className="text-muted"
                        dangerouslySetInnerHTML={{ __html: product.short_description }}
                    ></p>

                    {/* Pricing */}
                    <div className="d-flex align-items-center mb-3">
                        <h4 className="text-success me-2">
                            ₹{selectedVariation?.price || product.price}
                        </h4>
                        {selectedVariation?.compare_price || product.compare_price ? (
                            <h5 className="text-muted text-decoration-line-through">
                                ₹{selectedVariation?.compare_price || product.compare_price}
                            </h5>
                        ) : null}
                    </div>

                    {/* Variations */}
                    <div className="mb-3">
                        <h6>Select Variation:</h6>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                {selectedVariation?.variation_title || "Choose a Variation"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {product.variations?.map((variation) => (
                                    <Dropdown.Item
                                        key={variation._id}
                                        onClick={() => handleVariationChange(variation)}
                                    >
                                        {variation.variation_title} - ₹{variation.price}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mb-3">
                        <h6>Quantity:</h6>
                        <div className="d-flex align-items-center">
                            <Button
                                variant="outline-secondary"
                                onClick={() => handleQuantityChange("decrement")}
                            >
                                -
                            </Button>
                            <span className="mx-3 fs-5">{quantity}</span>
                            <Button
                                variant="outline-secondary"
                                onClick={() => handleQuantityChange("increment")}
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <Button
                        variant="success"
                        className="btn-lg d-flex align-items-center"
                        onClick={handleAddToCart}
                    >
                        <MdShoppingCart size={20} className="me-2" />
                        Add to Cart
                    </Button>

                    {/* Description */}
                    <div className="mt-4">
                        <h5>Description</h5>
                        <p
                            className="text-muted"
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        ></p>
                    </div>

                    {/* Categories */}
                    <div className="mt-4">
                        <h6>Categories:</h6>
                        <ul className="list-inline">
                            {product.categories?.map((category) => (
                                <li key={category._id} className="list-inline-item">
                                    <Badge bg="info">{category.catName}</Badge>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ratings */}
                    <div className="mt-4">
                        <h6>Rating:</h6>
                        <div className="d-flex align-items-center">
                            {[...Array(5)].map((_, index) => (
                                <span key={index}>
                                    {index < product.average_rating ? (
                                        <MdStar color="gold" />
                                    ) : (
                                        <MdStarOutline />
                                    )}
                                </span>
                            ))}
                            <span className="ms-2 text-muted">
                                ({product.rating_count} reviews)
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
