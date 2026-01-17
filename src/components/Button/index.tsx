import type { ReactNode } from "react";
import { ColorStrokeButton, ColorStrokeLongButton, ColorStrokeSuperLongButton, GlassButton, IconButton, ProButton, ProLongButton, 
    ShadowButton, ShadowLongButton, SimpleButton, SimpleLongButton, SimpleSuperLongButton, StrokeButton, StrokeLongButton, 
    StrokeSuperLongButton, WatchMovie } from "./Button.styles";

/* button variantlari */
type ButtonType =
    | "pro-button"
    | "simple-button"
    | "stroke-button"
    | "color-stroke-button"
    | "shadow-button"
    | "watch-movie"
    | "pro-long-button"
    | "simple-long-button"
    | "stroke-long-button"
    | "color-stroke-long-button"
    | "shadow-long-button"
    | "glass-button"
    | "simple-super-long-button" 
    | "stroke-super-long-button"
    | "color-stroke-super-long-button"
    | "icon-button";

/* Component map */
const components: Record<ButtonType, React.ElementType> = {
    "pro-button": ProButton,
    "simple-button": SimpleButton,
    "stroke-button": StrokeButton,
    "color-stroke-button": ColorStrokeButton,
    "shadow-button": ShadowButton,
    "watch-movie": WatchMovie,
    "pro-long-button": ProLongButton,
    "simple-long-button": SimpleLongButton,
    "stroke-long-button": StrokeLongButton,
    "color-stroke-long-button": ColorStrokeLongButton,
    "shadow-long-button": ShadowLongButton,
    "glass-button": GlassButton,
    "simple-super-long-button": SimpleSuperLongButton,
    "stroke-super-long-button": StrokeSuperLongButton,
    "color-stroke-super-long-button": ColorStrokeSuperLongButton,
    "icon-button": IconButton,
};

/* Props */
interface TypeButtonProps {
    children?: ReactNode;
    type?: ButtonType;
}

/* Button component */
const Button: React.FC<TypeButtonProps> = ({ type = "simple-button", children }) => {
    const Component = components[type];
    return <Component>{children}</Component>;
};

export default Button;
