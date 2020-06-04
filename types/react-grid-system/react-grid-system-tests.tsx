import * as React from 'react';
import { Container, Row, Col, ScreenClassProvider, Visible, Hidden, ScreenClassRender } from 'react-grid-system';

const TestHeader = () => <div />;
const TestPage = () => <div />;
const TestFooter = () => <div />;

const ContainerRowColTests = () => (
    <Container>
        <Row>
            <Col sm={4}>One of three columns</Col>
            <Col sm={4}>One of three columns</Col>
            <Col sm={4}>One of three columns</Col>
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
const ScreenClassRenderTest = () => (
    <ScreenClassRender
        render={screenClass => (
            <p style={{ fontSize: ['lg', 'xl'].some(s => s === screenClass) ? '2rem' : '1rem' }}>
                Screen class: {screenClass}
            </p>
        )}
    />
);

const VisibilityTest = () => (
    <div>
        <Visible lg>Can see in large :)</Visible>
        <Hidden lg>Can't see in large :(</Hidden>
    </div>
);

const ReactGridSystemTests = () => {
    return (
        <div>
            <ContainerRowColTests />
            <ScreenClassProviderTest />
            <ScreenClassRenderTest />
            <VisibilityTest />
        </div>
    );
};

export default ReactGridSystemTests;
