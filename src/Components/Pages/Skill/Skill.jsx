import { FaGlobe, FaWindows } from "react-icons/fa";

const Skill = () => {
  return (
    <div id="skill" className="py-10 w-full bg-[#F1F1F1]">
      <h2 className="text-4xl md:text-5xl px-5 md:px-0 font-bold text-center my-5">Professional Skills</h2>
      <div className="border-t-[1px] border-zinc-300 my-5"></div>
      <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase my-3 underline">Frontend</h2>
          <p className="text-sm md:text-lg font-semibold">HTML 5</p>
          <p className="text-sm md:text-lg font-semibold">CSS 3</p>
          <p className="text-sm md:text-lg font-semibold">JavaScript</p>
          <p className="text-sm md:text-lg font-semibold">React.js</p>
          <p className="text-sm md:text-lg font-semibold">Next.Js</p>
          <p className="text-sm md:text-lg font-semibold">Framer Motion</p>
          <p className="text-sm md:text-lg font-semibold">TailwindCSS</p>
          <p className="text-sm md:text-lg font-semibold">ShadCN/UI</p>
          <p className="text-sm md:text-lg font-semibold">MUI</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase my-3 underline">Backend</h2>
          <p className="text-sm md:text-lg font-semibold">Express.Js</p>
          <p className="text-sm md:text-lg font-semibold">Node.Js</p>
          <p className="text-sm md:text-lg font-semibold">Rest APIs</p>
          <p className="text-sm md:text-lg font-semibold">JWT</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase my-3 underline">Database</h2>
          <p className="text-sm md:text-lg font-semibold">MongoDB</p>
          <p className="text-sm md:text-lg font-semibold">MySQL</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase my-3 underline">Tools</h2>
          <p className="text-sm md:text-lg font-semibold">GitHub</p>
          <p className="text-sm md:text-lg font-semibold">Firebase</p>
          <p className="text-sm md:text-lg font-semibold">Kinde</p>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase my-3 underline">Other&apos;s</h2>
          <p className="text-sm md:text-lg font-semibold">SEO (Basic)</p>
          <p className="text-sm md:text-lg font-semibold">SEO (Sitemap/Robots handling)</p>
          <p className="text-sm md:text-lg font-semibold">SEO ( Meta Tags)</p>
        </div>
      </div>

      <div 
      className="w-full bg-fixed bg-cover"  
      style={{
        backgroundImage: "url('https://st.depositphotos.com/1907633/2379/i/450/depositphotos_23796733-stock-photo-businessman-working-with-a-cloud.jpg')"
      }}>
        <h2 className="text-5xl font-bold text-center my-10 text-white pt-10">Specialized In</h2>
        <div className="px-20 grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
          <div className="card shadow-xl p-6 text-center border bg-[#F1F1F1]">
            <div className="flex justify-center">
              <FaGlobe className="text-gray-500 w-10 h-10" />
            </div>
            <h2 className="text-2xl font-semibold mt-3">Web Development</h2>
            <p className="text-gray-500 text-sm md:text-xl mt-2">
              Create and maintain websites and also boost their performance and traffic capacity.
            </p>
          </div>

          <div className="card shadow-xl p-6 text-center border bg-[#F1F1F1]">
            <div className="flex justify-center">
              <FaWindows className="text-gray-500 w-10 h-10" />
            </div>
            <h2 className="text-2xl font-semibold mt-3">Web Application</h2>
            <p className="text-gray-500 text-sm md:text-xl mt-2">
              Standard designing, building, and implementing your applications with documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;