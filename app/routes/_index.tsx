import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Header = () => (
  <header>
    <h1>
      Parth's Site
    </h1>
    <nav>
      <ul>
        <li>
          <a href = "/">Home</a>
        </li>
        <li>
          <a href = "/about">About</a>
        </li>
      </ul>
    </nav>
  </header>
)
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>

      <Header />

     
    </div>
  );
}
