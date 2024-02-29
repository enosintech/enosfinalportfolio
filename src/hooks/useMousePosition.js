import { useEffect, useState} from 'react';

function useMousePosition() {
    const [MouseXY, setMouseXY] = useState({
        X: 0,
        Y: 0
    })

    const updateMousePosition = e => {

        const { clientX, clientY } = e;

        setMouseXY({
          X: clientX,
          Y: clientY
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition, false);
        window.addEventListener("mouseenter", updateMousePosition, false);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseenter", updateMousePosition);
        }
    }, [])

  return MouseXY;
}

export default useMousePosition;
