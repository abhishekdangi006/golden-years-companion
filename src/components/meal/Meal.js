import { foods } from "../../data/data";

function Meal () {
    return (
         <div>
            {
                foods.map((food) => {
                    <div>
                        <div>{food.title}</div>
                        <div>
                            {food.meals.map((item) => {
                                <div>
                                    <img src={item.img} alt="img"/>
                                    <div>{item.name}</div>
                                </div>
                            })}
                        </div>
                    </div>
                })
            }

         </div>
    )
}

export default Meal;