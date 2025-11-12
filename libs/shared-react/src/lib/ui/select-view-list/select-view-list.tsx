import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { ViewList, ViewModule } from '@mui/icons-material';
import { toggleViewBook } from '../../model';

interface SelectViewListProps {
  view: string;
  className?: string;
  onViewChange: (
    event: React.MouseEvent<HTMLElement>,
    newView: toggleViewBook
  ) => void;
}

export function SelectViewList({
  view,
  onViewChange,
  className,
}: SelectViewListProps) {
  return (
    <div className={className}>
      <ToggleButtonGroup value={view} exclusive onChange={onViewChange}>
        <ToggleButton value="module" aria-label="module">
          <ViewModule />
        </ToggleButton>

        <ToggleButton value="list" aria-label="list">
          <ViewList />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default SelectViewList;
