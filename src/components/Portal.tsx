import React, { useState } from 'react';
import { read, utils, writeFile } from 'xlsx';
import { Container, Row, Col, Table, Button, Form, InputGroup, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import image from '../assets/mchi_logo.png'

import './Portal.css';

const Dashboard = () => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (evt) => {
        const data = evt.target?.result as string;
        const workbook = read(data, { type: 'binary' });
        // Process workbook here if needed
      };
      reader.readAsBinaryString(file);
    }
  };

  const handleFileDownload = () => {
    const worksheet = utils.json_to_sheet([
      { "Primary": "Policy no.", "Data needed": "BA number, Master policy no., e-KYC", "Report / data": "Data", "Frequency": "High", "File type": ".csv", "Owner": "" },
      { "Primary": "BA no.", "Data needed": "Mob no., Address", "Report / data": "Data", "Frequency": "Low", "File type": ".xls", "Owner": "" },
      { "Primary": "Partner Code", "Data needed": "MTD", "Report / data": "Report", "Frequency": "High", "File type": ".xls", "Owner": "" }
    ]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    writeFile(workbook, "Data.xlsx");
  };

  return (
    <Container fluid className="dashboard bg-light">
      <Row>
        <Col md={2} className="sidebar bg-white p-3 border-end">
          <Navbar expand="md" className="flex-column align-items-start">
          <img src={image} className='sidebar-logo mb-3' />
            <Navbar.Brand href="#" className='cursive-font'>MIS Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column w-100">
                <Nav.Link href="#home"><i className="bi bi-house-door-fill"></i> Home</Nav.Link>
                <Nav.Link href="#requirement"><i className="bi bi-clipboard-data-fill"></i> Raise Request</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col md={10} className="main-content p-4">
          <header className="d-flex justify-content-between align-items-center my-3 ">
            <h1 className="h3 text-light m-3">Welcome User</h1>
            <Button variant="outline-light m-3"><i className="bi bi-box-arrow-right"></i> Log out</Button>
          </header>
          <section className="requirements-status my-4">
            <h2 className="h5">Requests Queue</h2>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Request</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Row 1</td><td>12 June 2024</td><td>WIP</td></tr>
                <tr><td>Row 2</td><td>08 June 2024</td><td>Completed</td></tr>
                <tr><td>Row 3</td><td>29 May 2024</td><td>Completed</td></tr>
                <tr><td>Row 4</td><td>10 May 2024</td><td>Completed</td></tr>
              </tbody>
            </Table>
          </section>
          <section className="existing-queries my-4">
            <h2 className="h5">Query Directory</h2>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search tickets..."
                aria-label="Search tickets"
              />
              <Button variant="outline-secondary">
                <i className="bi bi-calendar"></i>
              </Button>
            </InputGroup>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Input</th>
                  <th>Description</th>
                  <th>Upload</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Policy no.</td>
                  <td>BA number, Master policy no., e-KYC</td>
                  <td><Form.Control type="file" onChange={handleFileUpload} /></td>
                  <td><Button onClick={handleFileDownload} variant="outline-primary">Download</Button></td>
                </tr>
                <tr>
                  <td>BA no.</td>
                  <td>Mob no., Address</td>
                  <td><Form.Control type="file" onChange={handleFileUpload} /></td>
                  <td><Button onClick={handleFileDownload} variant="outline-primary">Download</Button></td>
                </tr>
                <tr>
                  <td>Partner Code</td>
                  <td>MTD</td>
                  <td><Form.Control type="file" onChange={handleFileUpload} /></td>
                  <td><Button onClick={handleFileDownload} variant="outline-primary">Download</Button></td>
                </tr>
              </tbody>
            </Table>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
