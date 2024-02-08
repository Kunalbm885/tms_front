import {
  CardHeader,
  CardBody,
  Chip,
  Button,
  Tabs,
  

} from "@material-tailwind/react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData } from "@/data";
import { usePDF } from 'react-to-pdf';

import { useState } from "react";

export function ItGenDash() {
    const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);


  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <div className="w-full">
        <Tabs value="app" className="">

        <Card className="w-96">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Generate Time Table
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              The Time table that will be generated will use Genetic Algorithm
            </Typography>
          </div>
        </ListItem>
        </List>
        </Card>
   
        </Tabs>
      </div>
      <Card>


        <CardHeader variant="gradient" color="gray" className=" flex justify-between mb-8 p-6">
          <Typography variant="h6" color="white" className=" m-0 flex items-center">
            All Timetables Generated...
          </Typography>
          <Button onClick={() => toPDF()} variant="outlined" color="white">Download PDF</Button>
        </CardHeader>

        
        <CardBody ref={targetRef} className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "Name",
                  "Position",
                  "status",
                  "employed",
                  "Access",
                  "Manage Access",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date, maccess }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {job[0]}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {job[1]}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="ghost"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "online" : "offline"}
                          className="p-2 font-medium"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          {maccess}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <EllipsisVerticalIcon
                            strokeWidth={2}
                            className="h-5 w-5 text-inherit"
                          />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      
    </div>
  );
}

export default ItGenDash;
