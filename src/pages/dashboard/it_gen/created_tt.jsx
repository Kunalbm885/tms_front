import {
  Card,
  Typography,
  Alert,
  Button,
  CardHeader,
} from "@material-tailwind/react";
import { usePDF } from "react-to-pdf";
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
const TABLE_HEAD = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const TABLE_ROWS = [
  {
    timings: "09:00 - 10:00",
    monday: "Computer Networks",
    tuesday: "Software Engineering",
    wednesday: "Database Management Systems",
    thursday: "Digital Signal Processing",
    friday: "Operating Systems",
    saturday: "Machine Learning",
    sunday: "-",
  },
  {
    timings: "10:15 - 11:15",
    monday: "Web Development",
    tuesday: "Data Structures and Algorithms",
    wednesday: "Artificial Intelligence",
    thursday: "Computer Organization and Architecture",
    friday: "Software Testing",
    saturday: "Big Data Analytics",
    sunday: "-",
  },
  {
    timings: "11:30 - 12:30",
    monday: "Embedded Systems",
    tuesday: "Mobile App Development",
    wednesday: "Computer Graphics",
    thursday: "Network Security",
    friday: "Cloud Computing",
    saturday: "Human-Computer Interaction",
    sunday: "-",
  },
  {
    timings: "12:45 - 1:45",
    monday: "Advanced Database Management",
    tuesday: "Software Project Management",
    wednesday: "Cryptography and Network Security",
    thursday: "Image Processing",
    friday: "Distributed Systems",
    saturday: "Natural Language Processing",
    sunday: "-",
  },
  {
    timings: "1:45 - 2:30",
    monday: "Lunch Break",
    tuesday: "Lunch Break",
    wednesday: "Lunch Break",
    thursday: "Lunch Break",
    friday: "Lunch Break",
    saturday: "Lunch Break",
    sunday: "Lunch Break",
  },
  {
    timings: "2:30 - 3:30",
    monday: "Software Quality Assurance",
    tuesday: "Computer Ethics",
    wednesday: "Data Mining",
    thursday: "Software Architecture",
    friday: "Mobile and Wireless Communication",
    saturday: "Software Maintenance",
    sunday: "-",
  },
  {
    timings: "3:45 - 4:45",
    monday: "Computer Vision",
    tuesday: "Information Retrieval",
    wednesday: "Network Programming",
    thursday: "Software Development Lifecycle",
    friday: "Internet of Things (IoT)",
    saturday: "Cloud Security",
    sunday: "-",
  },
];

export function Timetable() {
  const { toPDF, targetRef } = usePDF({
    filename: "timetable.pdf",
    options: {page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: 'letter',
      // default is 'portrait'
      orientation: 'landscape',
   }, },
  });

  return (
    <>
      <div className="p-10">
        <div className="mx-16 flex">
            <div className="flex align-center">

        <Typography variant="h3" className="mx-16" color="blue-gray">
          Time Table Creation
        </Typography>
            </div>
          <div>
            <a href="/dashboard/gentt">
              <Button className="m-6 rounded-full" variant="outlined">
                Go Back 
              </Button>
            </a>
          </div>
        </div>

        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-8 flex justify-between p-6"
        >
          <Typography
            variant="h6"
            color="white"
            className="m-0 flex items-center"
          >
            All Timetables Generated...
          </Typography>
          <Button onClick={() => toPDF()} variant="outlined" color="white">
            Download PDF
          </Button>
        </CardHeader>
        <div ref={targetRef} className="overflow-hidden">
          <Alert variant="outlined" className="flex flex-col text-center">
            <Typography variant="h4">Final Year</Typography>
            <div>INFT / DIV A</div>
          </Alert>

          <Card className="h-full w-screen overflow-scroll">
            <table className="w-full min-w-max table-fixed text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className={`border-2 border-blue-gray-900 bg-blue-gray-100 p-4 ${
                        index === 0 ? "w-1/10" : "w-1/10" // Adjust column widths as needed
                      }`}
                    >
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-normal leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="border-b border-blue-gray-100 p-4">
                {TABLE_ROWS.map(
                  (
                    {
                      timings,
                      monday,
                      tuesday,
                      wednesday,
                      thursday,
                      friday,
                      saturday,
                      sunday,
                    },
                    index
                  ) => (
                    <tr
                      key={timings}
                      className="border-b border-blue-gray-100 p-4"
                    >
                      <td className="text-wrap border-2 border-blue-gray-900 p-8">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {timings}
                        </Typography>
                      </td>
                      <td className="text-wrap border-2 border-blue-gray-900 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {monday}
                        </Typography>
                      </td>
                      <td className="text-wrap border-2 border-blue-gray-900 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {tuesday}
                        </Typography>
                      </td>
                      <td className="text-wrap border-2 border-blue-gray-900 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {wednesday}
                        </Typography>
                      </td>
                      <td className="text-wrap border-2 border-blue-gray-900 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {thursday}
                        </Typography>
                      </td>
                      <td className="text-wrap border-2 border-blue-gray-900 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {friday}
                        </Typography>
                      </td>
                      <td className="text-wrap border-2 border-blue-gray-900 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {saturday}
                        </Typography>
                      </td>
                      <td className="text-wrap border-2 border-blue-gray-900 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sunday}
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Timetable;
