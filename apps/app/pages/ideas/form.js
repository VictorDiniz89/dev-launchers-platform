import Page from "@devlaunchers/ideas/src/pages/form";
import IdeaApp from "@devlaunchers/ideas/src/pages/_app";
export { getStaticProps } from "@devlaunchers/ideas/src/pages/index";

/////////////////////////////////////////

import {constructAppPage} from "./AppPage";
export default constructAppPage(IdeaApp, Page);
