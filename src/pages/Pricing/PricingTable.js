import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { pricingTableData } from '../../utils/constants'; 

// Styled Components
const TransactionArea = styled.div`
  padding-bottom: 3rem;
//   background: #f5f5f5;

  @media (max-width: 992px) {
    padding-bottom: 2rem;
  }
`;

const StyledTableContainer = styled.div`
  margin-top: 5rem;
  
  .table {
    th {
      color: #ef5226;
    }
    tbody tr {
      background-color: #fff;
      color: #fc653c;
      font-size: 13px;
      text-align: center;
      border-left: 5px solid #05a7cc;
    }
    tbody tr:hover td {
      color: #ef5226;
    }
  }

  @media (max-width: 992px) {
    margin-top: 2rem;

    .table {
      font-size: 12px;

      th, td {
        padding: 0.75rem;
      }

      tbody tr {
        font-size: 12px;
        border-left: 3px solid #05a7cc;
      }
    }
  }
`;

const SectionTitle = styled.div`
  text-align: center;

  h5 {
    color: #fc653c;
  }

  h3 {
    color: #ef5226;
  }

  @media (max-width: 992px) {
    h5 {
      font-size: 14px;
    }
    h3 {
      font-size: 20px;
    }
  }
`;

// React Component
const PricingTable = () => {
  return (
    <TransactionArea>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <SectionTitle>
              <h5 className="subtitle">Pricing and</h5>
              <h3 className="title">User Allocation</h3>
            </SectionTitle>
          </Col>
        </Row>

        <StyledTableContainer>
          <Container>
            <Table responsive hover bordered>
              <thead className="thead-dark">
                <tr>
                  <th>Tier Level</th>
                  <th>Turn Over</th>
                  <th>Modules</th>
                  <th>Users</th>
                  <th>Users Cost</th>
                </tr>
              </thead>
              <tbody>
                {pricingTableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.tier}</td>
                    <td>{row.turnover}</td>
                    <td>{row.modules || "N/A"}</td>
                    <td>{row.users}</td>
                    <td>{row.userCost}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </StyledTableContainer>
      </Container>
    </TransactionArea>
  );
};

export default PricingTable;
