import { useEffect, useState } from "react";
import { getQuizByUser } from "../../Services/apiService";
import { Col, Container, Row } from "react-bootstrap";
import "./ListQuiz.scss";
const ListQuiz = () => {
    const [arrQuiz, setArrQuiz] = useState([]);

    const getQuizData = async () => {
        const response = await getQuizByUser();
        if (response && response.EC === 0) {
            setArrQuiz(response.DT);
        }
    };

    useEffect(() => {
        getQuizData();
    }, []);
    console.log(arrQuiz);
    return (
        <Container>
            <Row>
                {arrQuiz &&
                    arrQuiz.length > 0 &&
                    arrQuiz.map((quiz, index) => (
                        <Col
                            key={index}
                            className="card col-4"
                            style={{ width: "18rem" }}
                        >
                            <img
                                src={`data:image/jpeg;base64,${quiz.image}`}
                                className="card-img-top"
                                alt="quiz"
                                style={{
                                    height: "256px",
                                    objectFit: "contain",
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{quiz.description}</p>
                                <button className="btn btn-error">
                                    Start now
                                </button>
                            </div>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

export default ListQuiz;
