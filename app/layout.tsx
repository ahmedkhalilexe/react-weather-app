import "./globals.css";

export const metadata = {
  title: "React Weather App",
  description:
    "a simple react app fetching data from api and printing it to the screen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-screen">
        {children}
        <footer className="h-1/6 flex flex-col justify-center text-center font-medium bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-gray-300">
          <div>
            <span className=" text-yellow-500 font-bold">Alert</span> : For some
            locations temp is not accurate due to api errors.
          </div>
          <div>
            Made with &#10084; by{" "}
            <span>
              <a
                href="https://github.com/khalilrume "
                className=" font-bold underline text-gray-900"
              >
                A.Khalil
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
