import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 37px;
    margin-bottom: 40px;
    padding: 12px 24px;
    border-radius: 20px;
    background-color: #1A191930;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1.5px;
    border-radius: 20px;
    background: linear-gradient(90deg, var(--summer-sky), #228EE518, #228EE514, var(--summer-sky));

    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask-composite: exclude;

    pointer-events: none;
  }
`;

export const Logo = styled.div`
    margin-right: 54px;
    cursor: pointer;
    
    img {
        width: 34px;
        height: 34px;
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-right: 220px;

    a {
        text-decoration: none;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26px;

    button {
        background: none;
        border: none;
        cursor: pointer;

        img {
            width: 26px;
            height: 26px;
        }
    }
`;