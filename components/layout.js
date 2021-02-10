import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 md:container px-4 md:mx-auto md:px-6 rounded-xl">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
