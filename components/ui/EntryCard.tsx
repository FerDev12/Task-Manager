import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import { DragEvent, FC, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { Entry, Status } from '../../interfaces';
interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id);

    // TODO modify state to indicate a drag event going on
    startDragging();
  };

  const onDragEnd = () => {
    // TODO: cancel on drag
    endDragging();
  };

  const chipColor =
    entry.status === Status.pending
      ? 'secondary'
      : entry.status === Status.inProgress
      ? 'primary'
      : 'success';

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: 2,
          }}
        >
          <Chip variant='outlined' color={chipColor} label={entry.status} />
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export { EntryCard };
