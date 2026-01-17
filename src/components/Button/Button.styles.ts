import { BaseButton } from "./BaseButtonStyle.styles";
import styled from "styled-components";

export const SimpleButton = styled(BaseButton)`
`;

export const ProButton = styled(BaseButton)`
    position: relative;
    overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1.5px;
    border-radius: 12px;
    background: linear-gradient(90deg, #ffffffff, #ffffff00, #ffffff66);

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

export const StrokeButton = styled(BaseButton)`
    border: 2px solid var(--alice-blue);
    background-color: transparent;
`;

export const ColorStrokeButton = styled(BaseButton)`
    border: 2px solid var(--summer-sky);
    background-color: transparent;
`;

export const ShadowButton = styled(BaseButton)`
    box-shadow: 0 4px 8px -4px rgba(34, 142, 229, 0.2);
`;

export const WatchMovie = styled(BaseButton)`
  border-radius: 100px;
`;

export const ProLongButton = styled(ProButton)`
  padding: 15px 37px;
`;

export const SimpleLongButton = styled(BaseButton)`
  padding: 15px 37px;
`;

export const StrokeLongButton = styled(StrokeButton)`
  padding: 15px 37px;
`;

export const ColorStrokeLongButton = styled(ColorStrokeButton)`
  padding: 15px 37px;
`;

export const ShadowLongButton = styled(ShadowButton)`
  padding: 15px 37px;
`;

export const GlassButton = styled(ProButton)`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const SimpleSuperLongButton = styled(BaseButton)`
  font-size: 24px;
  font-weight: 500;
  font-style: medium;
  padding: 16px 64px;
`;

export const StrokeSuperLongButton = styled(StrokeButton)`
  font-size: 24px;
  font-weight: 500;
  font-style: medium;
  padding: 16px 64px;
`;

export const ColorStrokeSuperLongButton = styled(ColorStrokeButton)`
  font-size: 24px;
  font-weight: 500;
  font-style: medium;
  padding: 16px 64px;
`;

export const IconButton = styled(BaseButton)`
  padding: 12px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18px;
    height:18px;
  }
`;
