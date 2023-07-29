import { foods } from "../../data/data";

function HealthyMeal () {
    return (
         <div>
            {
                foods.map((food, i) => 
                    <div key={i}>
                        <div>{food.title}</div>
                        <div>
                            {food.meals.map((item, i2) => 
                                <div key={i2}>
                                    <img src={item.img} alt="img"/>
                                    <div>{item.name}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }

         </div>
    )
}

export default HealthyMeal;