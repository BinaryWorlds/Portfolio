import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loader = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Fallback() {
  return <Loader />;
}

function Suspense({ children }) {
  return <React.Suspense fallback={<Fallback />}> {children}</React.Suspense>;
}

Suspense.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Suspense;
