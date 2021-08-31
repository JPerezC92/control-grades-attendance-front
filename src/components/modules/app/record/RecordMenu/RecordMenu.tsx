import { Box, Button, MenuItem, MenuList, Typography } from '@material-ui/core';
import NextLink from 'next/link';
import { useAppSelector } from 'src/redux';
import { AppRoute } from 'src/routes';
import { RecordRoute } from 'src/routes/record.routepath';
import { CreateStudentFromCSVButton } from '../student';
import styles from './RecordMenu.module.scss';

export const RecordMenu: React.FC = () => {
  const { currentFile } = useAppSelector((state) => state.fileSystemReducer);

  return (
    <Box>
      <Box className={styles.appRecordButtons}>
        <CreateStudentFromCSVButton />

        <NextLink href={AppRoute.ROOT}>
          <Button component="a" variant="outlined" color="primary">
            <Typography variant="button" align="center">
              Ir a la pantalla principal
            </Typography>
          </Button>
        </NextLink>
      </Box>
      <Box>
        <MenuList className={styles.menu__list}>
          <NextLink
            href={RecordRoute.GRADE(encodeURIComponent(currentFile.id))}
            passHref
          >
            <MenuItem component="a" divider>
              Calificaciones
            </MenuItem>
          </NextLink>
          <NextLink
            href={RecordRoute.ATTENDANCE(encodeURIComponent(currentFile.id))}
            passHref
          >
            <MenuItem component="a" divider>
              Asistencias
            </MenuItem>
          </NextLink>
          <NextLink
            href={RecordRoute.STUDENT(encodeURIComponent(currentFile.id))}
            passHref
          >
            <MenuItem component="a" divider>
              Estudiantes
            </MenuItem>
          </NextLink>
          <NextLink
            href={RecordRoute.ACTIVITY(encodeURIComponent(currentFile.id))}
            passHref
          >
            <MenuItem component="a" divider>
              Actividades
            </MenuItem>
          </NextLink>
        </MenuList>
      </Box>
    </Box>
  );
};
