import IAddress from "./IAddress";
import IDough from "./IDoughs";
import IPizza from "./IPizza";
import IRecommendation from "./IRecommendation";
import ISize from "./ISize";

interface IOrder {
    size?: ISize;
    dough?: IDough;
    pizza?: IPizza;
    address?: IAddress;
    recommendation?:IRecommendation;
};

export default IOrder;