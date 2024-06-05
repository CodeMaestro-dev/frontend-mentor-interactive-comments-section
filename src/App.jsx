import Posts from "./assets/components/Posts";
import Comment from "./assets/components/Comment";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-slate-200 py-12">
        <div className="grid grid-cols-12 gap-5 items-center">
          <Posts />
          <Posts />
          <Posts />
          <Comment />
        </div>
      </div>
    </>
  );
}

export default App;
