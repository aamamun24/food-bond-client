import PropTypes from 'prop-types';

const RequestTable = ({ requestFood, handleCancel }) => {
    const { _id, foodImage, foodName, donatorName, pickupLocation, expiredDateTime, requestDate, donationAmount, foodStatus } = requestFood;

    return (
        <tr>
            <td>
                <img className='rounded w-24  object-cover' src={foodImage} alt={foodName} />
            </td>
            <td>
                <h4 className="text-lg font-medium">{foodName}</h4>
            </td>
            <td>
                <h4 className="font-medium">{donatorName}</h4>
            </td>
            <td>
                <h4 className="font-medium">{pickupLocation}</h4>
            </td>
            <td>
                <h4 className="text-sm font-medium">{expiredDateTime}</h4>
            </td>
            <td>
                <h4 className="text-sm font-medium">{requestDate}</h4>
            </td>
            <td>
                <h4 className="text-lg font-medium">{donationAmount}</h4>
            </td>
            <td>
                <h4 className="text-lg font-medium">{foodStatus}</h4>
            </td>
            <td>
                {
                    foodStatus === 'delivered' ?
                        <button className="btn btn-disabled btn-sm">Already Delivered</button>
                        :
                        <button onClick={() => { handleCancel(_id) }} className="btn btn-primary btn-sm">Cancel</button>
                }
            </td>
        </tr>
    );
};

RequestTable.propTypes = {
    requestFood: PropTypes.object,
    handleCancel: PropTypes.func
};

export default RequestTable;