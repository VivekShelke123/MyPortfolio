
export interface ProjectDataType{
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    link : string;
    id:number;

}

export const ProjectData : Array<ProjectDataType> = [
    {
        id:1,
        title : 'Quiet Reviews',
        description : 'This project was developed using Next.js for both the frontend and backend and uses Tailwind CSS and TypeScript. Users can send feedback to one another without revealing their identity. It features robust session management and two-factor authentication (2FA) for secure user login.',
        link : 'https://github.com/VivekShelke123/AnnonymusFeedBack'
    },
    {
        id:2,
        title:'Expense Manager',
        description:'This project was developed using React.js for the frontend and Node.js with Express.js for the backend, along with a MongoDB database. This app tracks user expense and income information and provides a user profile page with password and username updation. It also features a currency converter tool, using an API to fetch real-time currency values.',
        link : 'https://github.com/VivekShelke123/Second-MERN-Stack-Project-using-TypeScript'
    },
    {
        id:3,
        title:'Airline Bookig Systems',
        description:'This project was developed using React.js for the frontend, along with Node.js and Express.js for the backend, integrated with a MongoDB database. This application provides users with detailed realtime information about available flights based on their selected options by utilizing a robust API ensuring that users have access to the most current and accurate information.',
        link : 'https://github.com/VivekShelke123/my-first-MERN-Stack-Project'
    },
    {
        id:4,
        title : 'To-Do-List',
        description : 'This Project is developed Using React,js. User can create edit and delete the task as needed.',
        link : 'https://github.com/VivekShelke123/ToDo-List-Project'
    },
    {
        id:5,
        title:'Blog Website',
        description:'This is the most simple website Developed Using Node.js And EJS. In this app user can visits and read different blogs.',
        link : 'https://github.com/VivekShelke123/blog'
    }

]