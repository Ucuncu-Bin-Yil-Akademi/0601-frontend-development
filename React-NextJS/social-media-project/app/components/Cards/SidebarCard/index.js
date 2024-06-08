export default function SidebarCard({ title, body }) {
  return (
    <div className="border rounded bg-white shadow">
      <div className="text-center text-lg text-gray-600 text-shadow border-b p-2 bg-gray-100">
        <h2 className="p-0 m-0">{title}</h2>
      </div>
      <div className="flex flex-col gap-3 p-3">{body}</div>
    </div>
  );
}
