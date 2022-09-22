import { GoPrimitiveDot } from "react-icons/go";

function About() {
  const aboutmeText = [
    "Hi! My name is Luís I'm a programmer and currently working at Janela Digital.",
    "I'm from Portugal and I speak portuguese and english.",
    "I love programming, learn more programming languages and games.",
    "So far I learned HTML, CSS, TailwindCSS, JavaScript, C, C#, Java.",
    "I'm currently learning React and TypeScript.",
    "Check out the project section to learn more about my work!",
  ];

  return (
    <div>
      <h1>About me</h1>
      <div className="pt-5 ml-96">
        {aboutmeText.map((item) => (
          <div className="flex flex-1 max-w-lg">
            <GoPrimitiveDot />
            <p className="-mt-1">{item}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;
