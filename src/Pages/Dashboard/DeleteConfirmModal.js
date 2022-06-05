import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deleteOrder,refetch,setDeleteOrder}) => {

    const { _id, name,  email} = deleteOrder;
  const handleDelete = email =>{
      fetch(`https://saw-center.herokuapp.com/order/${_id}`, {
          method:'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      })
      .then(res => res.json())
      .then(data =>{
          if(data.deletedCount){
              toast.success(`Order ${name} is deleted`);
              refetch();
              setDeleteOrder(null);
          }
      })
  }
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            

            {/* <!-- Put this part before
             </body> tag --> */}
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}</h3>
                <p className="py-4">You won't be able to undo your action</p>
                <div className="modal-action">
                <button className="btn btn-xs btn-error" onClick={()=>handleDelete(email)}>Delete</button>
                <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;