import { MouseEventHandler } from 'react';
import { Button } from 'primereact/button';

type TableEditButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function TableEditButton({ onClick }: TableEditButtonProps) {
  return <Button icon="pi pi-pencil" onClick={onClick} severity="info" text />;
}
