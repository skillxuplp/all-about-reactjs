function Header() {
  return (
    <header>
      <h1>Creating Using First Component - Time</h1>

      <p>Fundamentals React - Creating Using First Component</p>
    </header>    
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; All Rights Reserved</p>
    </footer>
  );
}

function FirstComponent() {
  return (
    <>
      <Header />

      <main>
        <p>Time to Understand React First Component</p>
      </main>

      <Footer />
    </>
  );
}

export default FirstComponent;