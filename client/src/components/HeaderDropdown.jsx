import { useEffect, useState } from "react";

const HeaderDropdown = () => {
  const [categories, setCategories] = useState({});
  const [departments, setDepartments] = useState([]);
  const [divisions, setDivisions] = useState({});

  useEffect(() => {
    requestCategories();
  }, []);

  async function requestCategories() {
    const res = await fetch("http://localhost:3030/carta-api/categories");
    const json = await res.json();
    setDepartments(json.departments);
    setDivisions(json.divisions);
    setCategories(json.categories);
  }

  return (
    <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
      {departments.map((department) => {
        return (
          <li
            key={`department-${department[0]}`}
            className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
          >
            <button className="w-full text-left flex items-center outline-none focus:outline-none">
              <span className="pr-1 flex-1">{department[1]}</span>
            </button>
            <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
              {!divisions[department[0]].length ? (
                <p></p>
              ) : (
                divisions[department[0]].map((division) => {
                  return (
                    <li
                      key={`division-${division[0]}`}
                      className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
                    >
                      <button className="w-full text-left flex items-center outline-none focus:outline-none">
                        <span className="pr-1 flex-1">{division[1]}</span>
                      </button>
                      <ul className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                        {!categories[division[0]] ? (
                          <p></p>
                        ) : (
                          categories[division[0]].map((category) => {
                            return (
                              <li
                                key={`category-${category[0]}`}
                                className="px-3 py-1 hover:bg-gray-100"
                              >
                                {category[1]}
                              </li>
                            );
                          })
                        )}
                      </ul>
                    </li>
                  );
                })
              )}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderDropdown;
