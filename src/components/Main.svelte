<script>
  import Step from "../components/Step.svelte";

  let steps = [
    {
      name: "Casa Infantil Ronald McDonald Costa Rica",
      icon: "fa-solid fa-hotel text-green-400",
    },
    {
      name: "E-commerce API, Web and Design Development",
      icon: "fa-solid fa-credit-card text-green-400",
    },
  ];

  let benefits = [
    {
      name: "a self-taught developer",
      description:
        "As a highly motivated self-taught programmer, I have a passion for continuously learning and developing new skills. Through online courses, tutorials, and personal projects, I´ve acquired proficiency in JavaScript, Python, .NET and Laravel. My ability to quickly adapt to new technologies and solve complex problems independently has been instrumental in my personal projects.",
    },
    {
      name: "a proactive and reactive worker",
      description:
        "For one of the projects that I participated in, our team faced a critical system failure that shut down the platform as a whole, I took immediate action to identify the root cause and implemented a temporary solution to minimize downtime. Subsequently, I worked collaboratively with the team to develop a long-term strategy to prevent similar incidents in the future.",
    },
    {
      name: "a critical analitic",
      description:
        "I have a proven track record of leveraging critical thinking to drive business growth. In my previous role at [Company], I was responsible for developing a new product line. By conducting a comprehensive market analysis and identifying emerging trends, I was able to develop a product that met the needs of our target market and exceeded sales expectations.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-green-400">Fabián</span> Madriz
        <br />
        Computer <span class="poppins text-green-400">Enginner</span>
        <br /> Data <span class="poppins text-green-400">Scientist</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-green-300">tech inventory</span> includes Python, JavaScript,
        Java, PHP (Laravel 10+), MySQL, MongoDB, MS SQL, .NET Core, C#, Machine Learning
        Libraries (NumPy, Pandas, Seaboarn, MatPlot, etc).
      </p>
      <a
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins
              relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950
              cursor-pointer"
        href="#"
        target="_blank"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-green-400 opacity-40 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">Get in Touch &rarr;</h4>
      </a>
    </div>

    <div class="relative shadow-2x1 grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="Profile Image"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>

  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">A few of my endeavors</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-green-400">see</span> my work?
      </h3>
    </div>
    <!--<a
      href="#"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-green-700 duration-200"
    >
      <i class="fa-regular fa-circle-play"></i>
      <p>Watch the Video</p>
    </a>-->

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg-gap-10">
      <Step step={steps[0]}>
        <p>
          Lodging Web Plataform designed for a non-profit organization built
          with the technologuies <strong class="text-green-400">
            .NET, MS SQL and Razor Pages
          </strong>. Focused on the management of the lodging of the families of
          the children who are hospitalized in the Hospital Nacional de Niños.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          An online shopping web site that allows users purchase from a plenty
          selection of items, powered with <strong class="text-green-400">
            Node.js, Express.js, EJS, MySQL and Bootstrap
          </strong>. The site includes a shopping cart, user authentication and,
          most importantly, a payment gateway that allows the users to select
          their preferable payment method.
        </p>
      </Step>
    </div>
  </section>

  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative
      py-5
      before:absolute
      before:top-0
      before:left-0
      before:w-2/3
      before:h-1.5
      before:bg-green-700
      after:absolute
      after:bottom-0
      after:right-0
      after:w-2/3
      after:h-1.5
      after:bg-green-700"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want to Know More?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-green-400"> about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-green-600 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">{benefit.name}</h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">
      The <span class="text-green-400 poppins"> Complete </span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class="border-b border-solid border-slate-200">
          <tr class="">
            <th></th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="whitespace-nowrap bg-green-700 text-white p-4 px-8"
              >Me</th
            >
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-r-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
            >
              Dedication
            </td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
          <tr class="border-b border-solid border-r-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
            >
              Critical Thought
            </td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
          <tr class="border-b border-solid border-r-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
            >
              Interpersonal Skills
            </td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
          <tr class="border-b border-solid border-r-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
            >
              Programming Ability
            </td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-slate-500"></i></td>
            <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            <td><i class="fa-solid fa-check text-green-500"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-15 italic sm:hidden opacity-50">
      <p>Scroll to See More &rarr;</p>
    </div>
    <p class="mx-auto">Why not to Give the Opportunity?</p>
  </section>
</main>
