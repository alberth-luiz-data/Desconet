import { useState } from "react";
import { Card, Button, Form, Image, Row, Col } from "react-bootstrap";


export default function Profile() {
  const [activeTab, setActiveTab] = useState("Tarefas");
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [commitment, setCommitment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [commitments, setCommitments] = useState([]);

  const handleSchedule = () => {
    if (!commitment || !date || !time || !selectedConnection) return;
    const selected = connections.find((c) => c.id === selectedConnection);
    const newItem = {
      id: Date.now(),
      title: commitment,
      date,
      time,
      connection: selected?.name
    };
    setCommitments([newItem, ...commitments]);
    setCommitment("");
    setDate("18/03/2002");
    setTime("18 hrs");
    setSelectedConnection(null);
  };

  const connections = [
    {
      name: "Joana Bezerra",
      status: "Positivo",
      color: "success",
      id: 1
    },
    {
      name: "Joana Beze",
      status: "Negativo",
      color: "danger",
      id: 2
    }
  ];

  const renderTabContent = () => {
    if (activeTab !== "Tarefas") return null;

    return (
      <div className="px-3">
        {commitments.map((item) => (
          <Card className="mb-3 rounded-4 bg-primary text-white" key={item.id}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <div>{item.title}</div>
                <div className="fw-bold fs-5">{item.time}</div>
                <div className="text-decoration-underline">Com a sua conexão {item.connection}</div>
              </div>
              <span className="fs-4">&gt;</span>
            </Card.Body>
          </Card>
        ))}

        <Card className="p-3 rounded-4">
          <h6 className="fw-bold mb-3">Marque um compromisso</h6>
          <div>
            <div className="fw-bold">Conexões</div>
            <Row className="g-2 mb-3">
              {connections.map((conn) => (
                <Col xs={6} key={conn.id}>
                  <Card
                    className={`p-2 rounded-4 shadow-sm ${selectedConnection === conn.id ? "bg-light border border-primary" : ""}`}
                    onClick={() => setSelectedConnection(conn.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center">
                      <Image
                        src="/Profile.png"
                        roundedCircle
                        width={40}
                        height={40}
                        className="me-2"
                      />
                      <div>
                        <div className="fw-semibold small">{conn.name}</div>
                        <span>Cod: {conn.id} {conn.status}</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>

            <Form>
              <Form.Group className="mb-2">
                <Form.Control
                  placeholder="Qual o compromisso?"
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  placeholder="Data"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="Horário"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  className="rounded-pill px-4"
                  onClick={() => {
                    setCommitment("");
                    setDate("");
                    setTime("");
                    setSelectedConnection(null);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="primary"
                  className="rounded-pill px-4"
                  onClick={handleSchedule}
                >
                  Agendar
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center py-4">
      <div style={{ maxWidth: 400, width: "100%" }}>
        {renderTabContent()}
      </div>
    </div>
  );
}
