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
    <div className="flex flex-col items-center">
      <h1>A little bit about me</h1>
      <div>
        {aboutmeText.map((item,index) => (
          <div key={index} className="flex pt-4">
            <GoPrimitiveDot />
            <p className="-mt-1">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;
