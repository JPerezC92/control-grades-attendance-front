import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Student } from '../../types';
import StudentDialogEditForm from '../StudentDialogEditForm';

interface StudentButtonEditProps {
  student: Student;
}

const StudentButtonEdit: React.FC<StudentButtonEditProps> = ({ student }) => {
  const useModalStudentDialogEdit = useModal();
  return (
    <>
      <IconButton
        color="primary"
        onClick={useModalStudentDialogEdit.handleOpenModal}
      >
        <AiOutlineEdit />
      </IconButton>

      {useModalStudentDialogEdit.isOpen && (
        <StudentDialogEditForm
          student={student}
          useModalStudentDialogEdit={useModalStudentDialogEdit}
        />
      )}
    </>
  );
};

export default StudentButtonEdit;
