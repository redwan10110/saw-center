import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteConfirmModal = ({deleteProduct,refetch,setDeleteProduct}) => {

    const { _id, name,  email} = deleteProduct;
  const handleDelete = email =>{
      fetch(`https://saw-center.herokuapp.com/product/${_id}`, {
          method:'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
          }
      })
      .then(res => res.json())
      .then(data =>{
          if(data.deletedCount){
              toast.success(`Product ${name} is deleted`);
              refetch();
              setDeleteProduct(null);
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

export default ProductDeleteConfirmModal;