import classNames from "classnames/bind";
import GridView from "./components/GridView";
import styles from "./scss/app.module.scss";

const cx = classNames.bind(styles);

const App = () => {
  return (
    <div className={cx("app")}>
      <GridView />
    </div>
  );
};

export default App;
