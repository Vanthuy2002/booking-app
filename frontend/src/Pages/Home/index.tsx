export default function Home() {
  return (
    <section className='hero min-h-[calc(100vh-64px)] bg-base-200'>
      <div className='text-center hero-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-3xl font-bold'>
            Nền tảng chăm sóc sức khỏe
          </h1>
          <form className='flex items-center gap-2'>
            <input
              type='text'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered input-md input-info'
            />
            <button className='btn btn-secondary btn-outline'>Search</button>
          </form>
        </div>
      </div>
    </section>
  );
}
