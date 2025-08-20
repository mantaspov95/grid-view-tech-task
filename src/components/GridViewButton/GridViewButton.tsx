import {
  useEffect,
  useRef,
  useState,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { getRandomRgbaColor } from "./GridViewButton.logic";
import styles from "./GridViewButton.module.scss";
import classNames from "classnames/bind";
import { GRID_VIEW_BUTTON_CLICK_DURATION } from "./GridViewButton.constants";
import type { GridViewButtonState } from "./GridViewButton.types";

const cx = classNames.bind(styles);
const initialColor = getRandomRgbaColor();

const GridViewButton = ({ children }: PropsWithChildren): ReactElement => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [buttonState, setButtonState] = useState<GridViewButtonState>({
    isClicked: false,
    bgClicked: initialColor,
  });

  const bgColor = buttonState.isClicked ? buttonState.bgClicked : initialColor;

  const handleClick = (): void => {
    const newClickedColor = getRandomRgbaColor();

    setButtonState({
      isClicked: true,
      bgClicked: newClickedColor,
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setButtonState((prev) => ({ ...prev, isClicked: false }));
      timeoutRef.current = null;
    }, GRID_VIEW_BUTTON_CLICK_DURATION);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <button
      type="button"
      className={cx("grid-view-button")}
      onClick={handleClick}
      aria-pressed={buttonState.isClicked}
      style={{
        background: bgColor,
      }}
    >
      {children}
    </button>
  );
};
export default GridViewButton;
