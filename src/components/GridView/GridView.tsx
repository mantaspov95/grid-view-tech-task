import classNames from "classnames/bind";
import styles from "./GridView.module.scss";
import GridViewButton from "../GridViewButton";
import { GRID_SIZE } from "./GridView.constants";

const cx = classNames.bind(styles);

const GridView = () => {
  return (
    <div className={cx("grid-view")}>
      {Array.from({ length: GRID_SIZE }).map((_, index) => {
        const key = `item-${index}`;
        return (
          <div className={cx("grid-view__item")} key={key}>
            <GridViewButton />
          </div>
        );
      })}
    </div>
  );
};
export default GridView;
