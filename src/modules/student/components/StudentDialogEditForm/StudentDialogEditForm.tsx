import {
  Button,
  DialogTitle,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
} from '@material-ui/core';

import { useForm, UseModalResult } from 'src/hooks';
import { useAppDispatch } from 'src/redux';
import { startUpdateStudent } from 'src/modules/student/reducer';
import { Student } from '../../types';

interface StudentDialogEditFormProps {
  student: Student;
  useModalStudentDialogEdit: UseModalResult;
}

const StudentDialogEditForm: React.FC<StudentDialogEditFormProps> = ({
  student,
  useModalStudentDialogEdit,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = useModalStudentDialogEdit;

  const { formValues, handleInputChange } = useForm({
    firstname: student.firstname,
    lastname: student.lastname,
    studentCode: student.studentCode,
  });

  return (
    <>
      <Dialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography component="h2" variant="h4">
            Registrar Estudiante
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(startUpdateStudent({ ...student, ...formValues }));

            handleCloseModal();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              id="firstname"
              margin="dense"
              name="firstname"
              onChange={handleInputChange}
              type="text"
              variant="outlined"
              label="Nombres"
              value={formValues.firstname}
            />

            <TextField
              fullWidth
              id="lastname"
              margin="dense"
              name="lastname"
              onChange={handleInputChange}
              type="text"
              variant="outlined"
              label="Apellidos"
              value={formValues.lastname}
            />

            <TextField
              fullWidth
              id="studentCode"
              margin="dense"
              name="studentCode"
              onChange={handleInputChange}
              type="text"
              variant="outlined"
              label="Codigo de estudiante"
              value={formValues.studentCode}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="secondary">
              Cancelar
            </Button>
            <Button color="primary" type="submit">
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default StudentDialogEditForm;
