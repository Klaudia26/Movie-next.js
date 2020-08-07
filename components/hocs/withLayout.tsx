import { compose } from "redux";
import { Layout } from "../layouts/Layout";
import { withDisclaimer } from "./withDisclaimer";
import { withMovieModal } from "./withMovieModal";

const withLayout = (Page) => {
  return (props) => (
    <Layout>
      <Page {...props} />
    </Layout>
  );
};

export default compose(withLayout, withDisclaimer, withMovieModal);
