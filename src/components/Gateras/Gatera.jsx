import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

function Gatera() {
  const [gateras, setGateras] = useState([]);
  // const [registros, setRegistros] = useState([]);

  const cargaGateras = async () => {
    return axios("http://localhost:8080/gateras/activas")
      .then((response) => {
        setGateras(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const cargaRegistros = async (id) => {
  //   console.log(id);
  //   return axios(`http://localhost:8080/registros/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setRegistros(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    cargaGateras()
  }, []);

  return (
    <>
      {gateras ? (
        gateras.map((gatera) => {
          return (
            <Card key={gatera.id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Gatera N° {gatera.nombre}</Card.Title>
                <Card.Title>Gatera N° {gatera.Registros[0].hora_inicio}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Hora de inicio: {gatera.Registros.hora_inicio}
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Gatera;
