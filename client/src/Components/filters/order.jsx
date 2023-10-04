import { useDispatch } from "react-redux"
import { orderName } from "../Redux/Actions";


const OrdenAlf =()=> {
    const dispatch = useDispatch

    const ordenamiento = (e =>{
        e.preventDefault();
        dispatch(orderName(e.target.value));
    });

    return (
            <div>
              <select onChange={ordenamiento}>
                <option disabled selected defaultValue>
                  Order
                </option>
                <option value="nombreAz">A - Z</option>
                <option value="nombreZa">Z - A</option>
              </select>
            </div>

    )
};

export default OrdenAlf;




/*{import { useDispatch } from "react-redux";
import { orderWeightAlphabet } from "../../redux/actions";
import style from "./Ordering.module.css";

const Order = () => {
  const dispatch = useDispatch();

  const handleOrdering = (e) => {
    e.preventDefault();
    dispatch(orderWeightAlphabet(e.target.value));
  };

  return (
    <div>
      <select onChange={ordenamiento}>
        <option disabled selected defaultValue>
          Order
        </option>
        <option value="nombreAz">A - Z</option>
        <option value="nombreZa">Z - A</option>
      </select>
    </div>
  );
};

export default Order;}*/