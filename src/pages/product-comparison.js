// ComparisonTable.js
import React from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { comparisonData , aboutus_data } from '../utils/constants';
import { Container, Row } from 'react-bootstrap';
import { ContentColumn, Description, Divider, Heading, Section } from './IndustryPage';
const TableWrapper = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 2rem;
`;

const DangerText = styled.td`
    color: red;
`;
const ComparisonTable = () => {
    const { heading, description } = aboutus_data.productcomparison;

    return (
        <><Section>
            <Container>
                <Row>
                    <ContentColumn md={6}>
                        <Heading>{heading}</Heading>
                        <Divider />
                        <Description>{description}</Description>
                    </ContentColumn>
                </Row>
            </Container>
        </Section><TableWrapper>
                {/* First Comparison Table */}
                <Table striped bordered hover>
                    <caption>Feature Comparison: Tech Cloud ERP vs SAP Business One</caption>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Features</th>
                            <th>Tech Cloud ERP</th>
                            <th>SAP Business One</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.features.map((feature, index) => (
                            <tr key={feature.id}>
                                <td>{index + 1}</td>
                                <td>{feature.name}</td>
                                <td>{feature.techCloudERP}</td>
                                <DangerText>{feature.sapBusinessOne}</DangerText>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <br /><br />

                {/* Second Comparison Table */}
                <Table striped bordered hover>
                    <caption>Feature Comparison: Sales and Customer Relationship Management</caption>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Features</th>
                            <th>Tech Cloud ERP</th>
                            <th>SAP Business One</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.salesAndCRMFeatures.map((feature, index) => (
                            <tr key={feature.id}>
                                <td>{index + 1}</td>
                                <td>{feature.name}</td>
                                <td>{feature.techCloudERP}</td>
                                <DangerText>{feature.sapBusinessOne}</DangerText>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrapper></>
    );
};

export default ComparisonTable;
