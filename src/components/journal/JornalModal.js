
import Modal from 'react-modal';


import { useDispatch, useSelector } from 'react-redux';
import { endModal } from '../../actions/modal';




const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


Modal.setAppElement('#root');







export const JornalModal = () => {

    const dispatch = useDispatch()
    
     const {active} = useSelector((state) =>state.modal)

   

   
    

    

    const closeModal = () => {
        dispatch(endModal())
        

    }
    
                
    
    



    return (
        <>
        <Modal
        isOpen={active}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS ={200}
        style={customStyles}
        className = 'modal'
        overlayClassName = 'modal-fondo'
        >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30vw" height="30vh" viewBox="0 0 1024 1024">
        <title></title>
        <g id="icomoon-ignore">
        </g>
        <path fill="#25d366" d="M746.581 613.632c-12.843-6.4-75.392-36.992-87.040-41.216-11.648-4.309-20.181-6.4-28.715 6.4-8.405 12.587-32.896 41.131-40.277 49.579-7.467 8.32-14.891 8.96-27.563 3.2-12.8-6.4-53.888-19.84-102.528-63.36-37.888-33.92-63.317-75.52-70.827-88.32-7.424-12.8-0.811-19.84 5.547-26.24 5.803-5.76 12.843-14.72 19.243-22.315 6.229-7.723 8.277-12.843 12.672-21.163 4.267-8.96 2.091-16-1.067-22.357-3.2-6.4-28.672-69.12-39.339-94.123-10.24-24.917-20.779-21.76-28.672-21.76-7.339-0.64-15.829-0.64-24.363-0.64s-22.315 3.157-34.005 15.317c-11.648 12.8-44.587 43.52-44.587 105.6s45.653 122.24 52.011 131.2c6.357 8.32 89.813 136.32 217.6 191.36 30.464 12.8 54.187 20.48 72.704 26.837 30.464 9.685 58.24 8.32 80.213 5.163 24.491-3.883 75.392-30.763 86.016-60.843 10.88-30.080 10.88-55.040 7.68-60.8-3.157-5.76-11.52-8.96-24.32-14.72zM514.603 928h-0.683c-75.52 0-150.357-20.48-215.68-58.88l-15.36-9.131-160 41.6 42.88-155.52-10.197-16c-42.24-67.243-64.683-144.683-64.683-224.427 0-232.32 190.080-421.76 424.192-421.76 113.237 0 219.52 44.16 299.563 124.16 80 79.317 124.117 185.6 124.117 298.24-0.171 232.277-190.293 421.76-423.893 421.76zM875.52 147.157c-97.28-94.037-225.28-147.157-361.6-147.157-280.832 0-509.483 227.584-509.611 507.435 0 89.429 23.424 176.64 68.053 253.653l-72.363 262.912 270.293-70.485c74.496 40.235 158.293 61.611 243.627 61.739h0.256c280.96 0 509.696-227.669 509.824-507.563 0-135.509-52.907-263.040-149.12-358.869z"></path>
        </svg>


        </Modal>
        
        </>
    )
}
