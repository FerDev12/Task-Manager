import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Grid,
  List,
  Paper,
  Typography,
} from '@mui/material';
import {
  DragEvent,
  FC,
  SyntheticEvent,
  useContext,
  useMemo,
  useState,
} from 'react';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';
import { Status } from '../../interfaces';
import { EntryCard } from './EntryCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './EntryList.module.css';

interface Props {
  status: Status;
  title: string;
}

const EntryList: FC<Props> = ({ status, title }) => {
  const [expanded, setExpanded] = useState(true);
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const onToggleAccordion = (e: SyntheticEvent, expanded: boolean) => {
    setExpanded((prev) => !prev);
  };

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text');
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    setExpanded(true);
    endDragging();
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: 'fit-content', maxHeight: 'calc(100vh - 100px)' }}>
        <Accordion
          expanded={expanded || isDragging}
          onChange={onToggleAccordion}
          defaultExpanded
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h5'>{title}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <div
              onDrop={onDropEntry}
              onDragOver={allowDrop}
              className={isDragging ? styles.dragging : ''}
            >
              <Paper
                sx={{
                  overflow: 'auto',
                  backgroundColor: 'transparent',
                  padding: '3px 10px',
                }}
              >
                {/*cambiará dependiendo si estoy haciendo drag o no */}
                <List
                  sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s' }}
                >
                  {entriesByStatus.map((entry) => (
                    <EntryCard key={entry._id} entry={entry} />
                  ))}
                </List>
                {isDragging && (
                  <Box
                    // className={styles.draggable}
                    sx={{
                      width: '100%',
                      height: 200,
                    }}
                  ></Box>
                )}
              </Paper>
            </div>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Grid>
    // Aquí hacemos drop
  );
};

export { EntryList };
