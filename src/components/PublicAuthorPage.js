import { redirect } from "react-router-dom";


const PublicAuthorPage = () => {
  const profile = false;
  console.log("here at public");

  if (profile) {
    return redirect('/author')
  }

  return <div>PublicAuthorPage</div>;
};

export default PublicAuthorPage;
