
const Skill = () => {
    return (
        <div className="py-10 w-full">
            <h2 className="text-5xl font-bold text-center my-5">Professional Skills</h2>
            <div className="border-t-[1px] border-zinc-300 my-5"></div>
            <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <h2 className="text-4xl font-bold uppercase mb-3 underline">Frontend</h2>
                    <p className="font-semibold">HTML 5</p>
                    <p className="font-semibold">CSS 3</p>
                    <p className="font-semibold">JavaScript</p>
                    <p className="font-semibold">React.js</p>
                    <p className="font-semibold">TailwindCSS</p>
                    <p className="font-semibold">ShadCN/UI</p>
                    <p className="font-semibold">Next.Js</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold uppercase mb-3 underline">Backend</h2>
                    <p className="font-semibold">Express.Js</p>
                    <p className="font-semibold">Node.Js</p>
                    <p className="font-semibold">Rest APIs</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold uppercase mb-3 underline">Database</h2>
                    <p className="font-semibold">MongoDB</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold uppercase mb-3 underline">Tools</h2>
                    <p className="font-semibold">GitHub</p>
                    <p className="font-semibold">Firebase</p>
                    <p className="font-semibold">Kinde</p>
                  </div>
            </div>
        </div>
    );
};

export default Skill;