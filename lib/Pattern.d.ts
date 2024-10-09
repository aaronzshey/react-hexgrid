import React from "react";
import { Size } from "./Layout";
export type PatternProps = {
    id: string;
    link: string;
    size?: Size;
};
/**
 * Defines a `<defs><pattern><image>` group (will not be rendered) in order to allow defining images.
 * The given id can be used on the `Hexagon` to render the image
 */
export declare function Pattern({ id, link, size }: PatternProps): React.JSX.Element;
export default Pattern;
//# sourceMappingURL=Pattern.d.ts.map