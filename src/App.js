import BaseLayout from "./layout/BaseLayout";
import { withRouter } from "react-router-dom";
import Router from './routes'
function App(props) {
  return (
    <BaseLayout {...props}><Router /></BaseLayout>
  );
}

export default withRouter(App);
