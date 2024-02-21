import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({children}) {
    return (
        <ReactLenis root options={{lerp: 0.099, smoothTouch: true}}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScrolling;