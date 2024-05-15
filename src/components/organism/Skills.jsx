import Card from "../molecules/Card";

const Skills = () => {
    
  const skills = [
    {
      id: 1,
      title: "Web Developer",
      description: "Sebagai web developer, saya memiliki kemampuan utama di bagian frontend.",
      image:
        "https://www.exabytes.co.id/blog/wp-content/uploads/2023/12/apa-itu-web-development-adalah.jpg",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: "Saya menjadi UI/UX Designer di sebuah team di studi independent.",
      image:
        "https://rumahstudio.com/wp-content/uploads/2023/08/ux-ui.png",
    },
    {
      id: 3,
      title: "Slicing Design",
      description: "Saya suka membuat design web sendiri dan slicing.",
      image:
        "https://www.shutterstock.com/image-vector/sliced-text-effect-razor-slice-260nw-2353960647.jpg",
    },
  ];


  return (
    <div className="flex flex-col items-center justify-center md:mb-20 md:mt-10 px-8 gap-8 pt-14 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2">
      {skills.map((skill) => (
        <Card
          key={skill.id}
          title={skill.title}
          description={skill.description}
          image={skill.image}
        />
      ))}
    </div>
  );
};

export default Skills;
