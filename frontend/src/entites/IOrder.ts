import IDough from "./IDoughs";
import IPizza from "./IPizza";
import ISize from "./ISize";

interface IOrder {
    size?: ISize;
    dough?: IDough;
    pizza?:IPizza;
};

export default IOrder;