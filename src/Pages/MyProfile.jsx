import React, { useContext, useRef } from 'react';
import userIcon from '../assets/user.png'
import { AuthContext } from '../Context/Context';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const { updateUserProfile, setUser, user, setLoading } = useContext(AuthContext);
    const modalRef = useRef();
    

    const handleModal =()=>{
        modalRef.current.showModal();

    }
     
    const handleUpdateProfile =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.image.value;
        const photoWithCacheBust = `${photo}?t=${new Date().getTime()}`;
        updateUserProfile({ displayName: name, photoURL: photoWithCacheBust })
            .then(() => {
                toast.success('Updated Successfully!');
                setUser({ ...user, displayName: name, photoURL: photo });
                setLoading(false);
                modalRef.current.close();
            })
            .catch(err => {
                //console.log(err);
            })

    }

    return (
        <div className='container mx-auto flex items-center justify-center my-40 px-2'>
            <title>My Profile</title>
            <div className='border-transparent bg-base-300 py-15 px-20 rounded-2xl max-w-[600px] flex flex-col items-center  sm:flex-row gap-10'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2 shadow-lg shadow-amber-100">
                        <img src={user?.photoURL || userIcon} />
                    </div>
                </div>
                <div className='text-neutral-content'>
                    <p><span className='font-bold'>Name:</span> {user?.displayName || 'Update Profile'}</p>
                    <p><span className='font-bold'>Email</span> {user?.email || user?.providerData[0]?.email || user?.providerData[0]?.uid}</p>
                    <button onClick={handleModal} className='general-btn mt-4 whitespace-nowrap'>Update Profile</button>
                </div>
            </div>

            {/* modal for update habit */}
            <dialog ref={modalRef} key={user?.email} className="modal">
                <div className="modal-box ">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-neutral">Update Your Habit</h3>
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                  
                    {/* name field */}
                        <div>
                            <label className="block text-sm mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                defaultValue={user?.displayName}
                                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
                            />
                        </div>
                        {/* image */}
                        <div>
                            <label className="block text-sm mb-1">Image URL</label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Photo URL"
                                defaultValue={user?.photoURL}
                                className="input input-bordered w-full bg-white/20 text-accent-content focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg"
                            />
                        </div>

                        <button type='submit' className="general-btn min-w-full mt-3">Update Profile</button>
                    

                    </form>
                </div>
            </dialog>

        </div>
    );
};

export default MyProfile;

