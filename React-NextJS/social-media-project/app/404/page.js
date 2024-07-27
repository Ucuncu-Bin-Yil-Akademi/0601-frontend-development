export default function NotFoundPage() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-5 w-1/2 flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl mt-5 mb-0 text-secondary font-bold">404</h1>
          <span>Sayfa bulunamadı.</span>
        </div>
      </div>
    </div>
  );
}
