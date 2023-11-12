import './App.css';
import Layout from "./components/Layout";
import Header from "./components/Header";
import VideoContainer from "./components/VideoConatiner";
import ShareToInstaBtn from "./components/ShareToInstaBtn";

function App() {
  return (
    <>
    <Layout>
        <Header />
        <VideoContainer />
        <ShareToInstaBtn />
    </Layout>
    </>
  );
}

export default App;
