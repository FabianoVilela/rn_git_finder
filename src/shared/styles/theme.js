import styled from 'styled-components/native';
import { spacing } from '~shared/styles/metrics';
import { sizing, styling } from '~shared/styles/fonts';
import colors from '~shared/styles/colors';

export const Container = styled.View`
  flex: 1;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  align-items: ${props => props.alignItems || 'flex-start' };
  justify-content: ${props => props.justifyContent || 'flex-start' };
`;

export const Text = styled.Text`
  font-size: ${props => sizing[props.size || 'MEDIUM']}px;
  font-family: ${props => styling['FAMILY'][props.family || 'ROBOTO']};
  font-weight: ${props => styling['WEIGHT'][props.weight || 'LIGHT']};
  color: ${props => colors[props.color || 'DARKEST']};

`;