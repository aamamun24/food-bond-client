import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodTable = ({ food, handleDelete }) => {
    const { _id, foodName, foodImage } = food;

    return (
        <tr>
            <td>
                <img className='rounded w-24  object-cover' src={foodImage} alt={foodName} />
            </td>
            <td>
                <h4 className="text-xl font-medium">{foodName}</h4>
            </td>
            <td>
                <Link to={`/update-food/${_id}`}>
                    <button className='btn btn-primary btn-sm'>Edit</button>
                </Link>
            </td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm">Delete</button>
            </th>
            <th>
                <Link to={_id}>
                    <button className="btn btn-success btn-sm ">Manage</button>
                </Link>
            </th>
        </tr>
    );
};

FoodTable.propTypes = {
    food: PropTypes.object,
    handleDelete: PropTypes.func
};

export default FoodTable;