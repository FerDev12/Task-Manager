import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { DragEvent, FC, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { Entry, Status } from '../../interfaces';
import { dateFunctions } from '../../utils';
interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const router = useRouter();

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id);

    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
  };

  const onClick = () => {
    router.push(`/entries/${entry._id}`);
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
      onClick={onClick}
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
          <Typography variant='body2'>
            {dateFunctions.getFormattedTimeToNow(entry.createdAt)}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export { EntryCard };
