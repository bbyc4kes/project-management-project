import Button from "./Button";

function StartScreen({ setForm }) {
  return (
    <div className="text-center">
      <img
        src="logo.png"
        alt="logo"
        className="w-16 h-16 mb-4 object-contain mx-auto"
      />
      <h1 className="text-3xl font-bold text-stone-600 mb-6">
        No Project Selected
      </h1>
      <p className="text-stone-400 mb-5">
        Select a project or get started with a new one!
      </p>
      <Button onClick={setForm}>Create a project</Button>
    </div>
  );
}

export default StartScreen;
