import { useContext } from "react";
import PhunkyContext from "./PhunkyContext";
import PhunkyProvider from "./PhunkyProvider";

const usePhunky = () => useContext(PhunkyContext);

export default usePhunky;

export { PhunkyContext, PhunkyProvider };
