import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 84px;
    margin-bottom: 120px;
    width: 100%;
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 884px;
    margin-bottom: 40px;

    .link-style {
        text-decoration: none;
        color: var(--color-text);
        font-size: 24px;
        font-weight: 700;
        font-style: bold;
        display: flex;
        align-items: flex-end;
        gap: 4px;
        transition: all 0.3s ease;

        img {
            width: 24px;
            height: 24px;
        }

        &:hover {
            transform: translateX(6px);
        }
    }
`;

export const SocialMedia = styled.div`
    margin-top: 106px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 56px;
`;