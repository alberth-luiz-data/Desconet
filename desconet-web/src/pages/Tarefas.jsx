import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Tarefas");

  const renderTabContent = () => {
    if (activeTab !== "Tarefas") return null;

    return (
      <div className="px-3">
        <h5 className="mt-4 fw-bold">Para você</h5>
        {[1, 2].map((_, index) => (
          <Card className="mb-3 rounded-4 bg-primary text-white" key={index}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <span>Tarefa {index + 1}</span>
              <span className="fs-4">&gt;</span>
            </Card.Body>
          </Card>
        ))}

        <h5 className="mt-4 fw-bold">Você pode gostar</h5>
        {[3, 4].map((_, index) => (
          <Card className="mb-3 rounded-4 bg-primary text-white" key={index}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <span>Tarefa {index + 1}</span>
              <span className="fs-4">&gt;</span>
            </Card.Body>
          </Card>
        ))}
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
