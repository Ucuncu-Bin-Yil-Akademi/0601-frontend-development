export default function ContentCard({ content, prop2, prop4 }) {
  const exampleValue = "Örnek Değer";
  return (
    <>
      <div className="bg-gray-600 text-white rounded p-10">
        {content} - {prop2}
        <button onClick={prop4}>Bana tıkla</button>
      </div>
    </>
  );
}
