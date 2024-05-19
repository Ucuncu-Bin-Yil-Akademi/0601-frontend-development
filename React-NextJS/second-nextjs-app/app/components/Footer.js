export default function Footer() {
  return (
    <div
      id="footer"
      className="w-full bg-gray-200 p-10 absolute bottom-0 flex items-center justify-between"
    >
      <p className="text-center">© 2024 Your Company</p>
      <p>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |{" "}
        <a href="/contact-us">Contact Us</a>
      </p>
    </div>
  );
}
