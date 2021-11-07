import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { startUpdateActivity } from 'src/modules/activity/reducer';
import { useForm, UseModalResult } from 'src/hooks';
import { useAppDispatch } from 'src/redux';
import { Activity } from '../../types';

interface ActivityDialogEditProps {
  activity: Activity;
  modalActivityDialogEdit: UseModalResult;
}

const ActivityDialogEdit: React.FC<ActivityDialogEditProps> = ({
  activity,
  modalActivityDialogEdit,
}) => {
  const dispatch = useAppDispatch();

  const { isOpen, handleCloseModal } = modalActivityDialogEdit;

  const { formValues, handleInputChange } = useForm({
    name: activity.name,
    value: activity.value,
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
            Editar actividad
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              startUpdateActivity({
                ...activity,
                ...formValues,
                value: parseInt(`${formValues.value}`, 10),
              })
            );
            handleCloseModal();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              id="name"
              label="Actividad"
              margin="dense"
              name="name"
              onChange={handleInputChange}
              type="text"
              value={formValues.name}
              variant="outlined"
            />

            <TextField
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              fullWidth
              id="value"
              label="Valor"
              margin="dense"
              name="value"
              onChange={handleInputChange}
              type="number"
              value={formValues.value}
              variant="outlined"
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

export default ActivityDialogEdit;
