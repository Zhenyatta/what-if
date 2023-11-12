import './App.css';
import Layout from "./components/Layout";
import Header from "./components/Header";
import VideoContainer from "./components/VideoConatiner";
import ShareToInstaBtn from "./components/ShareToInstaBtn";

function App() {
  return (
    <>
    <Layout>
      <meta property="og:title" content="What If Flowers" />
      <meta property="og:image" content="https://scontent.fevn7-1.fna.fbcdn.net/v/t39.30808-6/329592103_698524715085110_3433477043776568579_n.png?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ewu31gNzOxYAX98wvPP&_nc_ht=scontent.fevn7-1.fna&oh=00_AfCE-9bIvKhhf4zEC2mMgRtMicK-pRh7IYHExnXu-cgn8A&oe=65560A7A" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet" />
        <Header />
        <VideoContainer />
        <ShareToInstaBtn />
    </Layout>
    </>
  );
}

export default App;
