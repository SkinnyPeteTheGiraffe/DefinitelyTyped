import * as React from 'react';
import { Container, Row, Col, ScreenClassProvider, Visible, Hidden } from 'react-grid-system';

const TestHeader = () => <div />;
const TestPage = () => <div />;
const TestFooter= () => <div />;

const ContainerRowColTests = () => (
    <Container>
        <Row>
            <Col sm={4}>
                One of three columns
            </Col>
            <Col sm={4}>
                One of three columns
            </Col>
            <Col sm={4}>
                One of three columns
            </Col>
        </Row>
    </Container>
);
const ScreenClassProviderTest = () => (
    <ScreenClassProvider>
        <TestHeader />
        <TestPage />
        <TestFooter />
    </ScreenClassProvider>
);

const VisibilityTest = () => (
    <div>
        <Visible lg>
            Can see in large :)
        </Visible>
        <Hidden lg>
            Can't see in large :(
        </Hidden>
    </div>
);

const ReactGridSystemTests = () => {
    return (
        <div>
            <ContainerRowColTests/>
            <ScreenClassProviderTest/>
            <VisibilityTest/>
        </div>
    );
};

export default ReactGridSystemTests;
