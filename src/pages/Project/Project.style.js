import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import img from '../../components/Image/Image';
import { wrapper1 } from '../../ui/glass';
import linkComponent from '../../components/Link/Link';
import { para } from '../../ui/para';

export const Wrapper = styled.div``;

export const Image = styled(img)``;

export const Link = styled(linkComponent)``;

export const Container = styled(wrapper1)``;

export const Title = styled.div``;

export const Para = styled(para)``;

export const CloseButton = styled(HashLink)`
  svg {
    width: 6rem;
  }
`;
