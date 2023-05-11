import { ConfirmDialog } from 'primereact/confirmdialog';

type DeleteConfirmDialogProps = {
  header: string;
  message: string;
  visible: boolean;
  onAccept: () => void;
  onHide: () => void;
};

export default function DeleteConfirmDialog({
  header,
  message,
  visible,
  onAccept,
  onHide,
}: DeleteConfirmDialogProps) {
  return (
    <ConfirmDialog
      visible={visible}
      onHide={onHide}
      icon="pi pi-exclamation-triangle p-error"
      header={header}
      message={message}
      accept={onAccept}
      reject={onHide}
      acceptClassName="p-button-danger"
    ></ConfirmDialog>
  );
}
