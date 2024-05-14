const About = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center lg:flex-row'>
      <div className='avatar w-1/4 flex justify-center items-center'>
        <div className='w-36 skeleton opacity-70 rounded-full'>
          <img src='https://avatars.githubusercontent.com/u/122707602?s=400&u=b14b6fed2e04aeb52aa7865ab2985da76d6e8488&v=4' />
        </div>
      </div>
      <div className='divider lg:divider-horizontal'></div>
      <div className='flex justify-center flex-grow w-2/4 h-screen card bg-base-300 rounded-box place-items-center items-center '>
        <p className=' tracking-widest  w-3/4  top-56'>
          I'm on a mission to become a full-stack developer while diving into
          the fascinating worlds of machine learning and deep learning.
          Balancing work, education, and my personal goals might be tough, but
          I'm determined to make it work. If I can squeeze in a degree in
          engineering or physics while I'm at it, even better. My ultimate
          dream? Landing a spot at SpaceX. I truly believe in aiming high and
          dreaming big—there's so much more out there for us to explore and
          discover.
        </p>
      </div>
    </div>
  );
};

export default About;
