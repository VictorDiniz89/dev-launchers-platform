import Header from "../../components/common/Header";
import Projects from "../../components/modules/Projects";
import Footer from "../../components/common/Footer";
import axios from "axios";

export const getStaticProps = async () => {
  // let { data: projects } = await axios(
  //   "https://cms-api-staging.devlaunchers.com/projects"
  // );
  const res = await fetch("https://cms-api-staging.devlaunchers.com/projects");
  const data = await res.json();
  return {
    props: { projects: data },
    revalidate: 20,
  };
};
const ProjectsList = ({ projects }) => {
  return (
    <div>
      <Header />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
};

export default ProjectsList;
