const Resume = () => {
  return (
    <div className='flex w-screen h-screen justify-start ml-28 '>
      <div className='flex justify-center items-start flex-col'>
        <div className=''>
          <h2>Front End</h2>
          <ol className='flex justify-center  flex-col flex-wrap m-10'>
            <li>1.HTML</li>
            <li>2.CSS</li>
            <li>3.Tailwind</li>
            <li>4.React</li>
            <li>5.DaisyUi</li>
          </ol>
        </div>
        <div className='divider'></div>
        <div className=''>
          <h2>Back End</h2>
          <ol className='flex justify-center flex-col flex-wrap m-10 '>
            <li>1.Node</li>
            <li>2.Express</li>
            <li>3.MongoDB</li>
            <li>4.PostSQL</li>
            <li>5.GraphQL</li>
            <li>6.RESTFULL</li>
          </ol>
        </div>
      </div>
      <a
        href='../assets/react.svg'
        download={"../assets/KadirBalkayaExampleResume.pdf"}>
        <button className='btn btn-primary relative left-36 top-24'>
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Resume;
