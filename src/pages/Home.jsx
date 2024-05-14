import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='hero min-h-screen bg-base-200 '>
      <img
        src='https://cdna.artstation.com/p/assets/images/images/028/102/058/original/pixel-jeff-matrix-s.gif?1593487263'
        alt='background'
        className='w-screen h-screen opacity-25'
      />
      <div className='hero-content text-center'>
        <div className='max-w-md '>
          <h1 className='text-5xl font-bold'>Welcome To My Portfolio</h1>
          <p className='py-6'>
            "Imagination is more important than knowledge. For knowledge is
            limited, whereas imagination embraces the entire world, stimulating
            progress, giving birth to evolution."
          </p>
          <Link key={1} to='/about'>
            <button className='btn btn-primary'>Learn about me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
