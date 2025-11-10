import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ViewList, ViewModule } from '@mui/icons-material';
import { toggleViewBook } from '../../model';

interface SelectViewListProps {
  view: string;
  onViewChange: (
    event: React.MouseEvent<HTMLElement>,
    newView: toggleViewBook
  ) => void;
}

export function SelectViewList({ view, onViewChange }: SelectViewListProps) {
  return (
    <ToggleButtonGroup value={view} exclusive onChange={onViewChange}>
      <ToggleButton value="module" aria-label="module">
        <ViewModule />
      </ToggleButton>

      <ToggleButton value="list" aria-label="list">
        <ViewList />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default SelectViewList;
