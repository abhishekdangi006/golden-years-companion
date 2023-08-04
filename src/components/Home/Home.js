
import style from "./home.module.css";
function Home() {
  return (
    <div className={style.container}>
      <div className={style.titlecon}>
      <h1 className={style.title}>Golden Years Companion</h1>
        <p className={style.des}>
        Welcome to "Golden Years Companion" - a website designed with love and care to empower and support our beloved seniors in making the most of their golden years. Our mission is to enhance the lives of older individuals by providing them with tools and resources to lead fulfilling and healthy lives. 
        </p>
      </div>

      <div>
        <h1 className={style.feature}>
        Features of Golden Years Companion:
        </h1>

        <div className={style.featurecon}>
          <h3 className={style.headings}>1. Personalized To-Do List:</h3>
          <p className={style.paragraph}> We understand the value of a well-structured day. Our user-friendly to-do list feature allows seniors to plan and organize their daily activities, ensuring they stay engaged and accomplish their tasks with ease.</p>
        </div>
        <div className={style.featurecon}>
          <h3 className={style.headings}>2. Nutritious Meal Suggestions:</h3>
          <p className={style.paragraph}>Eating well is key to staying healthy and happy. Our website offers a range of delicious and nutritious meal suggestions tailored to the needs of older individuals. Whether it's breakfast, lunch, or dinner, we have something to satisfy every palate.</p>
        </div>
        <div className={style.featurecon}>
          <h3 className={style.headings}>3. Daily Routine Checklist:</h3>
          <p className={style.paragraph}>A consistent daily routine can bring stability and comfort. Our daily routine checklist assists seniors in establishing a structured day, which can lead to a sense of purpose and improved well-being.</p>
        </div>
        <div className={style.featurecon}>
          <h3 className={style.headings}>4. Medicine Checklist:</h3>
          <p className={style.paragraph}> Keeping track of medications can be daunting, but we've got it covered. Our medicine checklist ensures that seniors take their prescribed medications on time, promoting better health management.</p>
        </div>
        <div className={style.featurecon}>
          <h3 className={style.headings}>5. Community and Support:</h3>
          <p className={style.paragraph}>
          We believe in the power of connections. Our website fosters a warm and welcoming community where seniors can share experiences, seek advice, and build meaningful friendships.
          </p>
        </div>
      </div>
        
    </div>
  );
}

export default Home;
