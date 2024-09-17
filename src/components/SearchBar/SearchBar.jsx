import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    if (values.query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    handleSetQuery(values.query);
  };

  return (
    <div>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Field
                type="text"
                name="query"
                placeholder="Search images and photos"
              />
              <button type="submit">Search</button>
            </Form>
          )}
        </Formik>
        <Toaster />
      </header>
    </div>
  );
};

export default SearchBar;
