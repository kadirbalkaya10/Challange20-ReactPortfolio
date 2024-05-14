const Portfolio = () => {
  return (
    <section className='flex justify-center align-center flex-wrap'>
      <div className='card w-96 bg-base-100 shadow-xl image-full m-8'>
        <figure>
          <img
            src='https://media.licdn.com/dms/image/D4D12AQHkJNWKG5d22A/article-cover_image-shrink_720_1280/0/1687767682423?e=2147483647&v=beta&t=JZ6YElxeXtdm5qV9VtH7z_Z7oBHyJXuQXfTEaYhcMks'
            alt='MERN'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>MERN</h2>
          <div className='card-actions justify-end'>
            <a href='https://github.com/kadirbalkaya10/1StopShop.git'>
              <button className='btn btn-primary mt-24'>Visit Website</button>
            </a>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl image-full m-8'>
        <figure>
          <img src='https://wallpapercave.com/wp/wp4923981.jpg' alt='React' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>React</h2>
          <div className='card-actions justify-end'>
            <a href='https://github.com/kadirbalkaya10/Challange20-ReactPortfolio.git'>
              <button className='btn btn-primary mt-24'>Visit Website</button>
            </a>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl image-full m-8'>
        <figure>
          <img
            src='https://assets-global.website-files.com/61ade8b25c29d61e883b12a4/648c51fa6664ad9ce0030f40_Blog-Sequelize_-CLI--A-comprehensive-tutorial-to-get-started_Thumbnail.jpg'
            alt='ORM'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>ORM</h2>
          <div className='card-actions justify-end'>
            <a href='https://github.com/kadirbalkaya10/Challange13-OrmEcommerceBackEnd.git'>
              <button className='btn btn-primary mt-24'>Visit Website</button>
            </a>
          </div>
        </div>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl image-full m-8'>
        <figure>
          <img src='https://wallpapercave.com/wp/wp8724894.png' alt='MongoDB' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>MangoDB</h2>
          <div className='card-actions justify-end'>
            <a href='https://github.com/kadirbalkaya10/Challange-18-NoSQL-Social-Network-API.git'>
              <button className='btn btn-primary mt-24'>Visit Website</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
