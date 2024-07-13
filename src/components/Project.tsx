import { ProjectData } from "@/lib/Project";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const Project = () => {

  return (
    <section className="text-white">
      <div className="text-3xl mb-4 p-5 text-center">
        <h1>Projects</h1>
      </div>
      <div className="px-8 text-center text-blue-300">
        <p>I have developed a diverse range of projects, starting with foundational technologies like HTML, CSS, and JavaScript, and integrating EJS with Node.js. My experience extends to using TypeScript and Tailwind CSS for efficient styling. I have built numerous projects with React.js and Next.js, focusing on creating dynamic user interfaces. My full-stack development skills are showcased through projects that utilize Node.js and Express.js for backend functionality, with a recent notable project being a comprehensive full-stack application developed with Next.js.</p>
      </div>
      <div className="flex flex-col relative items-center">
        {ProjectData.map((item)=>(
            <Card key={item.id} className="mx-10 my-8 w-[70%]">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          
        ))}
      </div>
    </section>
  )
}

export default Project;
