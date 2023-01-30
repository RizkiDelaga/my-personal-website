import './DaftarPahlawanIndonesia.css';
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Button, Container, Dropdown, Form, Tab, Table, Tabs } from 'react-bootstrap';
import { Autocomplete, TextField } from '@mui/material';

function DaftarPahlawanIndonesia() {
  const [daftarPahlawan, setDaftarPahlawan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState('Table');
  const [heroCard, setHeroCard] = useState();
  const [tableSearch, setTableSearch] = useState('');

  React.useEffect(() => {
    // Browser tab Titel
    document.title = 'Project || Portal Pahlawan Indonesia';
    // Fetch data
    fetchDataPahlawan();
  }, []);

  // Fetch data from API
  const fetchDataPahlawan = async () => {
    const { data } = await axios.get('/api/heroes');

    setDaftarPahlawan(
      data.sort((a, b) => {
        return a.name >= b.name ? 1 : -1;
      })
    );
    setIsLoading(false);
  };

  // Dropdown toggle from React-Bootstrap
  const buttonToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="dropdown-button"
    >
      <span>{children}</span>
      <span>&#x25bc;</span>
    </Button>
  ));

  // Dropdown menu from React-Bootstrap
  const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <Form.Control
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Cari Pahlawan"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) => !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  });

  return (
    <Fragment>
      {/* Background Flag */}
      <img
        src="https://img.freepik.com/free-photo/flag-indonesia_1401-133.jpg?w=1060&t=st=1674809497~exp=1674810097~hmac=f9603e064fa4ed89d2e85eb7c0b3c3520c5faaa79ad705941a1aabb660ae0baf"
        alt="flag"
        className="background-indonesia"
      />

      <Container>
        <div className="content-box">
          <div className="header-content">
            <h1>Portal Pahlawan Indonesia</h1>
            <p>Mengenang daftar para pahlawan nasional yang telah berjuang untuk negara Indonesia</p>
            <h6>
              Created by{' '}
              <a
                href="https://www.instagram.com/rizkidelagaprasetya/"
                style={{ textDecoration: 'none', cursor: 'pointer', color: 'revert' }}
              >
                @rizkidelagaprasetya
              </a>
            </h6>
          </div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            {/* See List Patriot with Table */}
            <Tab eventKey="Table" title="Table">
              <div className="search-input">
                <Form.Control
                  size="md"
                  type="search"
                  onChange={function (e) {
                    setTableSearch(e.target.value);
                  }}
                  placeholder="Cari Pahlawan"
                />
              </div>

              <Table striped bordered hover>
                <thead style={{ backgroundColor: 'lightskyblue' }}>
                  <tr style={{ textAlign: 'center', textJustify: 'center' }}>
                    <th>No</th>
                    <th>Name</th>
                    <th>Birth Year</th>
                    <th>Death Year</th>
                    <th>Description</th>
                    <th>Ascension Year</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading
                    ? null
                    : daftarPahlawan
                        .filter(function (e) {
                          let regexKey = new RegExp(tableSearch, 'gi');
                          return String(e.name).match(regexKey);
                        })
                        .map((item, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.birth_year}</td>
                              <td>{item.death_year}</td>
                              <td>{item.description}</td>
                              <td>{item.ascension_year}</td>
                            </tr>
                          );
                        })}
                </tbody>
              </Table>
            </Tab>

            {/* See List Patriot with Combo Box */}
            <Tab eventKey="Combo Box" title="Combo Box">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={daftarPahlawan.map((item, index) => {
                    return {
                      label: item.name,
                      birth_year: item.birth_year,
                      death_year: item.death_year,
                      description: item.description,
                      ascension_year: item.ascension_year,
                      year: 1994,
                    };
                  })}
                  onChange={function (event, value) {
                    setHeroCard({ ...value, status: 'combo box' });
                    console.log(heroCard);
                  }}
                  sx={{ width: '100%', maxWidth: 400 }}
                  renderInput={(params) => <TextField {...params} label="Daftar Pahlawan" />}
                />
                {heroCard && heroCard.status === 'combo box' ? (
                  <div className="hero-card">
                    <h2>Detail Pahlawan</h2>
                    <hr />
                    <h3>{heroCard ? heroCard.label : null}</h3>
                    <p className="mb-0">
                      <strong>{heroCard ? heroCard.description : null}</strong>
                    </p>
                    <p className="m-0">
                      Birth Year : <strong>{heroCard ? heroCard.birth_year : null}</strong>
                    </p>
                    <p className="m-0">
                      Death Year : <strong>{heroCard ? heroCard.death_year : null}</strong>
                    </p>
                    <p className="m-0">
                      Ascension Year : <strong>{heroCard ? heroCard.ascension_year : null}</strong>
                    </p>
                  </div>
                ) : null}
              </div>
            </Tab>

            {/* See List Patriot with Dropdown */}
            <Tab eventKey="Dropdown" title="Dropdown">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <Dropdown>
                  <Dropdown.Toggle as={buttonToggle} id="dropdown-custom-components">
                    Daftar Pahlawan
                  </Dropdown.Toggle>
                  <Dropdown.Menu as={CustomMenu}>
                    {isLoading
                      ? null
                      : daftarPahlawan.map((item, index) => {
                          return (
                            <Dropdown.Item
                              eventKey={index + 1}
                              onClick={() => setHeroCard({ ...item, status: 'dropdown' })}
                            >
                              {item.name}
                            </Dropdown.Item>
                          );
                        })}
                  </Dropdown.Menu>
                </Dropdown>
                {heroCard && heroCard.status === 'dropdown' ? (
                  <div className="hero-card">
                    <h2>Detail Pahlawan</h2>
                    <hr />
                    <h3>{heroCard ? heroCard.name : null}</h3>
                    <p className="mb-0">
                      <strong>{heroCard ? heroCard.description : null}</strong>
                    </p>
                    <p className="m-0">
                      Birth Year : <strong>{heroCard ? heroCard.birth_year : null}</strong>
                    </p>
                    <p className="m-0">
                      Death Year : <strong>{heroCard ? heroCard.death_year : null}</strong>
                    </p>
                    <p className="m-0">
                      Ascension Year : <strong>{heroCard ? heroCard.ascension_year : null}</strong>
                    </p>
                  </div>
                ) : null}
              </div>
            </Tab>
          </Tabs>
        </div>

        {/* Footer Section */}
        <div className="footer-quotes">
          <p className="m-0" style={{ fontStyle: 'italic' }}>
            "Bangsa yang besar adalah bangsa yang menghormati jasa para pahlawan"
          </p>
          <p className="m-0 fw-bold">- Dr. Ir. H. Soekarno -</p>
        </div>
      </Container>
    </Fragment>
  );
}

export default DaftarPahlawanIndonesia;
