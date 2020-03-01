import styled, { createGlobalStyle, css } from 'styled-components';

export const SampleComponent = styled.div`
  color: ${props => props.theme.colors.primary.calypso.hex};
`;

// export MyGlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${props => props.theme.colors.secondary};
//   }
// `;

// export cssHelper = css`
//   border: 1px solid ${props => props.theme.borderRadius};
// `;
