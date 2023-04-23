import { useEffect, useState } from "react"

// получить ширину окна
const getWindowWidth = () => {
    const { innerWidth: windowWidth } = typeof window !== 'undefined'
    ? window
    : { innerWidth: 0 }

    return { windowWidth }
}

const useWindowWidth = () => {
    // актуальная ширина окна
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    const handleResize = () => setWindowWidth(getWindowWidth());

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { windowWidth, handleResize };
}
//
export const useMediaQuery = (maxWidth: number) => {
    // получаем значение из хука useWindowWidth
    const { windowWidth: { windowWidth }, handleResize } = useWindowWidth();
    // состояние говорит снизился ли контент ниже maxWidth - нужно ли рендерить другой
    // jsx?
    const [isMedia, setIsMedia] = useState(false);

    useEffect(() => {
        // условный рендеринг передавая сюда maxWidth
        if (windowWidth <= maxWidth) {
            setIsMedia(true);
        } else {
            setIsMedia(false);
        }
    }, [handleResize, maxWidth, windowWidth]);

    return isMedia;
}
/*
В next объект window есть на клиенте только на сервере нет его

handleResize - получает текущую ширину окна
 */