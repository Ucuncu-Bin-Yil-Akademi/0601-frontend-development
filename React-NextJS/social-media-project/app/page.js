import PublishSection from "./components/Main/PublishSection";
import ContentList from "./components/Main/ContentList";

export default function Home() {
  return (
    <div className="bg-white border shadow rounded min-h-screen">
      <PublishSection />
      <ContentList />
    </div>
  );
}
