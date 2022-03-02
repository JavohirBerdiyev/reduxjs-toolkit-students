import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/studentSlice";
import { useHistory } from "react-router-dom";
import { uuid } from "uuidv4";

const AddStudent = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      id: uuid(),
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(addStudent(data));
    console.log(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    });
    history.push("/");
  };
  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field }) => (
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Button type="submit">Create new Student</Button>
        </form>
      </Paper>
    </div>
  );
};

export default AddStudent;
