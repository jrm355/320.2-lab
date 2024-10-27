function Header() {
  return (<h1>Hey there</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>I am actually I high intelligence beagle</h1>);
}

function App() {
  return (
    <>
      <Header />
      <Content color="greenç" text="I don't know monkeys" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="there are monkeys in the tree" />
      <Footer />
    </>
  );
}

export default App;