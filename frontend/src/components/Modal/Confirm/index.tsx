type Props = {
  onHandle?: () => void;
  onCLose?: () => void;
  show: boolean;
};

export default function ModalConfirm(props: Props) {
  const { onHandle, onCLose, show } = props;
  return (
    <dialog
      className={`modal over ${show ? 'opacity-100 pointer-events-auto' : ''}`}
    >
      <div className='modal-box'>
        <h3 className='text-lg font-bold'>Are you sure!</h3>
        <p className='py-4'>Are you sure to logout???</p>
        <div className='modal-action'>
          <div className='flex gap-2'>
            <button onClick={onCLose} className='btn'>
              Close
            </button>
            <button onClick={onHandle} className='btn btn-warning'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
