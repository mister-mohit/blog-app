import { redirect } from "react-router-dom";
import AuthorHome from "../pages/AuthorHome";

const PrivateAuthorPage = () => {
  const profile = true;

  if (!profile) {
    console.log('working well')
    return redirect("/signin");
  }

  return (
    <>
      <AuthorHome />
    </>
  );
};

export default PrivateAuthorPage;
