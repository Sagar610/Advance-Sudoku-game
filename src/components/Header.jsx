import React from "react";

const Header = () => {
  const projects = [
    { name: "Sudoku Solver", link: "https://advance-sudoku-game.vercel.app/" },
    { name: "Weather App", link: "https://advance-weather-app-one.vercel.app/" },
    { name: "Todo", link: "https://advance-todo-list-one.vercel.app/" },
    { name: "Linked in", link: "https://www.linkedin.com/in/sagar-gondaliya/" },
    { name: "GitHub", link: "https://github.com/Sagar610" },
  ];

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Projects</h1>
        <nav>
          <ul className="flex space-x-4">
            {projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
