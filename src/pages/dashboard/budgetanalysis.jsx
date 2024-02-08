import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
  } from "@material-tailwind/react";
  
  export function BudgetCreate() {
    return (
      <>
        <div className="h-screen">
          <Card color="transparent" shadow={false}>
            <div className="mt-5 flex justify-center">
              <Typography variant="h4" color="blue-gray">
                Create Budget Plan
              </Typography>
            </div>
            <div className="p-4">
              <form className="mt-4 mb-2 w-full p-4">
              <div className="my-2">
                <Select color="blue" label="Select Category">
                  <Option>Category 1</Option>
                  <Option>Category 2</Option>
                  <Option>Category 3</Option>
                  <Option>Category 4</Option>
                  <Option>Category 5</Option>
                </Select>
                </div>
                <div className="mb-4 flex flex-col lg:flex-row items-center gap-6">
                  <Input size="xl" label="From MSE" />
                  <Input size="xl" label="From MSEs including SC/ST" />
                  <Input size="xl" label="MSEs owned by SC/ST Entreprenuers" />
                </div>
                {/* <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                /> */}
                <Button className="mt-6">
                  Add More Items
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </>
    );
  }
  
  export default BudgetCreate;