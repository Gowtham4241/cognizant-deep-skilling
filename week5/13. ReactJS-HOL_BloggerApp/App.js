import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBook = true;
  const showBlog = true;
  const showCourse = false;

  return (
    <div>

      <h1>Blogger App</h1>

      {/* 1. Using if...else */}
      {(() => {
        if (showBook) {
          return <BookDetails />;
        } else {
          return <h2>No Book Details</h2>;
        }
      })()}

      <hr />

      {/* 2. Using Ternary Operator */}
      {showBlog ? <BlogDetails /> : <h2>No Blog Details</h2>}

      <hr />

      {/* 3. Using Logical AND (&&) */}
      {showCourse && <CourseDetails />}

    </div>
  );
}

export default App;