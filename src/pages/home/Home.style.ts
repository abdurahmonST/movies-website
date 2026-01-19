import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Trends = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Top = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    padding: 48px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
`;