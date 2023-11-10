import { useEffect } from "react";
import { useSpring } from "framer-motion";

const useVerticalScroll = ({
                               ref,
                               limit = 300,
                               index = 0,
                               direction = "top",
                               springConfig = { mass: 0.01 },
                               transformValueKoef = 10,
                           }) => {
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleScroll = () => {
            if (ref?.current) {
                const top =
                    ref.current.getBoundingClientRect().top + window.scrollY;
                const startPosition = top + ref.current?.clientHeight / 4;

                const updatedTransform = window.scrollY - startPosition;

                const isTop = direction === "top";
                const getUpdatedY = (coord) =>
                    ((coord * (10 - index * 2)) / transformValueKoef) *
                    (isTop ? -1 : 1);

                let updatedY = getUpdatedY(updatedTransform);

                if (updatedTransform < 0) {
                    updatedY = 0;
                }
                if (updatedTransform > limit) {
                    updatedY = getUpdatedY(limit);
                }

                y.set(updatedY);
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [limit]);

    return y;
};

export default useVerticalScroll;