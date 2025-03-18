import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button, ListGroup, Alert } from 'react-bootstrap';

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  // Récupérer les données au chargement de la page
  useEffect(() => {
    fetchData();
  }, []);

  // Fonction pour récupérer les données
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data');
      setData(response.data);
      setError('');
    } catch (error) {
      setError('Erreur lors de la récupération des données.');
      console.error(error);
    }
  };

  // Fonction pour ajouter des données
  const addData = async () => {
    if (!name || !value) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/data', { name, value });
      fetchData(); // Rafraîchir les données après l'ajout
      setName('');
      setValue('');
      setError('');
    } catch (error) {
      setError('Erreur lors de l\'ajout des données.');
      console.error(error);
    }
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Bienvenue chez vous !</Card.Title>

          {/* Formulaire pour ajouter des données */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez un nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Valeur</Form.Label>
              <Form.Control
                type="number"
                placeholder="Entrez une valeur"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={addData}>
              Ajouter
            </Button>
          </Form>

          {/* Afficher les erreurs */}
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Card.Body>
      </Card>

      {/* Afficher les données */}
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Données stockées</Card.Title>
          <ListGroup>
            {data.map((item) => (
              <ListGroup.Item key={item._id}>
                <strong>{item.name}</strong> : {item.value}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;