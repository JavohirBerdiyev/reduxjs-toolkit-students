import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearStudent, getStudent } from "../../store/studentSlice";
const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);

  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
  }, []);

  const student = useSelector((state) => state.student.student);
  const { firstName, lastName, email, address, phone } = student;
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {firstName} {lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {address}
      </Typography>
    </Paper>
  );
};

export default Student;
