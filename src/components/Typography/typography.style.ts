import styled from "styled-components";

export const H1 = styled.h1<{color?: string}>`
  font-weight: 700;
  font-style: bold;
  font-size: 96px;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const H2 = styled.h2<{ color?: string }>`
  font-weight: 700;
  font-style: bold;
  font-size: 72px;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const H3 = styled.h3<{ color?: string }>`
  font-weight: 700;
  font-style: bold;
  font-size: 48px;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const H4 = styled.h4<{ color?: string }>`
  font-weight: 500;
  font-style: medium;
  font-size: 24px;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const P1 = styled.p<{ color?: string }>`
  font-weight: 500;
  font-style: medium;
  font-size: 16px;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (max-width: 768px) {
    font-size: 14px; 
  }
`;

export const P2 = styled.p<{ color?: string }>`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const P3 = styled.p<{ color?: string }>`
  font-weight: 300;
  font-style: light;
  font-size: 16px;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
