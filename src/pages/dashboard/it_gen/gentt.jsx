import { Link } from 'react-router-dom';

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function GenTt() {
    return (

        <div className="bg-white flex justify-center rounded-2xl p-4 pb-8">

       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Generate Timetable
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill inputs to create new timetable using the developed Algorithm.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Branch Name
            </Typography>
            <Input
              size="lg"
              placeholder="INFT"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="my-4 flex items-center gap-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
              Year 
            </Typography>
            <Input
              size="lg"
              placeholder="Second Year"
              containerProps={{ className: "min-w-[72px]" }}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Div
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="A"
              containerProps={{ className: "min-w-[72px]" }}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

                      
   
          <Link to="/dashboard/generated_timetable">
          <Button className="mt-6" fullWidth>
            Create Timetable
          </Button>
          </Link>
        </form>
      </Card>
        </div>

    );
  }

  export default GenTt;
