import IDough from "./IDoughs";
import IPizza from "./IPizza";
import ISize from "./ISize";

interface IRecommendation {
    id?: number;
    discount: number;
    size: ISize;
    dough: IDough;
    pizza: IPizza;
}

export default IRecommendation;