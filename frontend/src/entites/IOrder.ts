import IDough from "./IDoughs";
import ISize from "./ISize";

interface IOrder {
    size?: ISize;
    dough?: IDough;
};

export default IOrder;