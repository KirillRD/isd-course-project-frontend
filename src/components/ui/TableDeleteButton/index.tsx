import { MouseEventHandler } from 'react';
import { Button } from 'primereact/button';

type TableDeleteButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function TableDeleteButton({ onClick }: TableDeleteButtonProps) {
  return <Button icon="pi pi-trash" onClick={onClick} severity="danger" text />;
}
