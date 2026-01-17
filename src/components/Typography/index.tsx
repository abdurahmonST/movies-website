import type { ReactNode } from "react";
import { H1, H2, H3, H4, P1, P2, P3} from "./typography.style";

type TypographyType = "h1" | "h2" | "h3" | "h4" | "p1" | "p2" | "p3";

const components: Record<TypographyType, React.ElementType> = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    p1: P1,
    p2: P2,
    p3: P3,
};

interface TypographyProps {
    type: TypographyType;
    children?: ReactNode;
    color?: string;
}

const Typography: React.FC<TypographyProps> = ({
    type,
    children,
    color,
}) => {
    const Component = components[type];

    return <Component color={color}>{children}</Component>;
};

export default Typography;
