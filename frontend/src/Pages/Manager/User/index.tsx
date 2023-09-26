export default function ManageUser() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='pt-3'>
        <div>
          <p className='h4 fw-bold'>Manage Users</p>
        </div>
        <div>
          <div className='d-flex gap-2 justify-content-end'>
            <button className='btn btn-primary'>Refresh</button>
            <button className='btn btn-warning'>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
