
import Modal from 'react-modal';

import moment from 'moment';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
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



// const startDate = moment().minute(0).second(0).add(1,'hours')
// const endDate = startDate.clone().add(1,'hours')


// const initEvent= {
    
//     title:'',
//     start: startDate.toDate(),
//     end:endDate.toDate(),
//     notes:''
   



export const JornalModal = () => {

    const dispatch = useDispatch()
    // const {modalOpen} = useSelector((state) =>state.ui)
     const {active} = useSelector((state) =>state.modal)

    // const [endState, setEndState] = useState(endDate.toDate())

    // const [formValues, setFormValues] = useState(initEvent)

    // const [titleValid, setTitleValid] = useState(true)
    // const [clockValid, setClockValid] = useState(true)

    // const {title, notes, start, end} = formValues;

   
    

    // const handledInputChange = ({target}) => {
    //     setFormValues({
    //         ...formValues,
    //         [target.name] : target.value
    //     })        

    // }
    // const heandledStartChange = (e) => {
    //     setStartState(e)
    //     setFormValues({
    //         ...formValues,
    //         start: e
    //     })

    // }
    // const heandledEndChange = (e) => {
    //     setEndState(e)
    //     setFormValues({
    //         ...formValues,
    //         end : e
    //     })
    // }

    const closeModal = () => {
        dispatch(endModal())
        // setFormValues(initEvent)
        // dispatch(eventClearActive())

       
        
        // setTimeout(() => {
        //     setStartState(startDate.toDate())
        //     setEndState(endDate.toDate())
            
        // }, 200);

        
        
        
       

    }
    // const handlendSubmitForm = (e) => {
    //     e.preventDefault();
    //     // if(momentStart.isSameOrAfter(momentEnd)){
    //     //     return Swal.fire('Alert', 'La Fecha de inicio tiene que ser diferete a la de finalizacion','warning')
    //     // }
    //     if(title.trim().length <= 2){
    //         return setTitleValid(false)
    //     }else {
    //        setTitleValid(true)}

    //     if (clockValid===false){
    //         setClockValid(false)
    //         return Swal.fire('Error', ' Fecha y hora invalida','error')}
        
        
    //     closeModal()


    //     if (activeEvent){
    //             dispatch(eventUpdate(formValues))
    //         }else{
                
    //             dispatch(eventAddNew({
                 
    //                 id: new Date().getTime(),
    //                 ...formValues,
    //                 user:{
    //                     _id: new Date().getTime(),
    //                     name:'Nahusel'
    //                 }
    //             }))
    //         }

       
        
        
        

    // }
    // useEffect(() => {
    //     const momentStart = moment(start)
    //     const momentEnd= moment(end)
    //     if(momentStart.isSameOrAfter(momentEnd)){
    //         setClockValid(false)

    //         return Swal.fire('Alerta!!', ' Tiempo Lineal Compadre','question')

    //     }
    //     setClockValid(true)
        
      
    // }, [start,end])

    // useEffect(() => {

    //     if (activeEvent){
    //         setFormValues(activeEvent)
    //     }else{
    //         setFormValues(initEvent)
            
    //     }
       
       
    // }, [activeEvent,setFormValues])



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
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 1024 1024">
        <title></title>
        <g id="icomoon-ignore">
        </g>
        <path d="M0 175.957c0-8.704 0.896-17.109 2.56-25.387l83.456 73.984 91.477-101.547-81.664-72.661c11.051-3.072 22.613-4.864 34.645-4.864 71.707 0.094 129.871 57.944 130.474 129.521v0.953c0 6.485-0.512 12.971-1.408 19.2l101.76 90.112c-36.639 28.444-65.786 64.795-85.151 106.601l-0.737 1.772-105.515-93.397c-11.776 3.909-25.333 6.171-39.416 6.187h-0.008c-72.040-0.049-130.426-58.435-130.475-130.47v-0.005zM893.525 717.568c-13.056 0-25.643 1.92-37.547 5.504l-98.475-87.211c-17.065 45.673-43.592 84.372-77.385 115.253l-0.226 0.203 85.035 75.307c-1.159 6.419-1.84 13.826-1.877 21.385v0.033c0.079 72.047 58.502 130.422 130.56 130.422 13.312 0 26.159-1.992 38.258-5.695l-0.925 0.244-84.992-75.52 91.307-100.907 84.523 75.093c1.451-7.723 2.219-15.531 2.219-23.637v-1.109c-0.604-71.575-58.767-129.365-130.428-129.365-0.017 0-0.033 0-0.050 0h0.003zM748.587 393.643l105.515-93.397c12.459 3.968 25.643 6.187 39.424 6.187 72.029-0.102 130.381-58.516 130.381-130.56 0-8.937-0.898-17.665-2.609-26.097l0.142 0.838-83.456 73.984-91.477-101.547 81.664-72.661c-10.369-3.033-22.289-4.805-34.613-4.864h-0.032c-71.707 0.094-129.871 57.944-130.474 129.521v0.953c0 6.485 0.512 12.971 1.408 19.2l-101.76 90.112c36.634 28.433 65.78 64.769 85.151 106.56l0.737 1.771zM266.453 635.861l-98.432 87.211c-11.25-3.512-24.186-5.535-37.593-5.535-71.672 0-129.841 57.808-130.428 129.341v1.165c0 8.107 0.768 15.915 2.219 23.637l84.565-75.093 91.307 100.907-85.035 75.52c11.175 3.459 24.021 5.452 37.333 5.452 72.058 0 130.482-58.375 130.56-130.415v-0.007c-0.037-7.593-0.718-15-1.992-22.203l0.115 0.784 85.035-75.307c-34.035-31.081-60.576-69.78-76.988-113.438l-0.665-2.018zM649.216 749.227c4.752 7.115 7.584 15.864 7.584 25.275 0 25.355-20.554 45.909-45.909 45.909s-45.909-20.554-45.909-45.909c0-2.536 0.206-5.025 0.601-7.449l-0.036 0.265h-8.192c0.339 2.097 0.533 4.515 0.533 6.978 0 25.355-20.554 45.909-45.909 45.909s-45.909-20.554-45.909-45.909c0-2.463 0.194-4.88 0.567-7.238l-0.034 0.261h-6.4c0.246 1.807 0.386 3.896 0.386 6.018 0 25.889-20.867 46.904-46.699 47.145h-0.023c-25.771 0-46.677-21.333-46.677-47.573 0-8.96 2.432-17.28 6.656-24.405-63.701-48.725-105.557-130.176-105.557-222.421 0-149.205 109.184-270.165 243.755-270.165s243.755 120.96 243.755 270.165c0 92.715-42.283 174.549-106.581 223.147zM470.272 496.896c-5.988-11.237-14.005-20.631-23.646-28.010l-0.204-0.15c-11.16-6.916-24.659-11.083-39.118-11.264h-0.050c-4.829 0.007-9.524 0.567-14.029 1.618l0.418-0.082c-17.28 2.133-31.872 13.952-41.941 27.605-8.832 10.965-15.701 24.277-15.872 38.613-1.365 11.861 1.024 23.723 3.2 35.328 2.816 13.739 12.501 24.917 23.467 33.024 5.077 4.053 12.373 9.643 18.773 4.949 4.267-5.717 0.683-14.080 4.565-20.395 1.536-6.112 5.552-11.078 10.89-13.853l0.118-0.056c11.221-5.632 22.485-11.179 34.475-15.147 9.728-2.859 17.749-9.344 26.027-14.891 10.88-8.405 18.091-23.808 12.928-37.291zM512.768 596.096c-11.904-0.299-26.88 52.779-24.491 75.947 7.467 30.72 10.112-21.547 24.491-21.589 13.781 0.597 11.733 53.547 22.613 21.504 3.328-21.333-9.557-75.52-22.613-75.861zM684.971 560.555c2.176-11.605 4.565-23.467 3.2-35.328-0.171-14.336-7.040-27.648-15.872-38.613-10.069-13.653-24.661-25.429-41.941-27.605-4.087-0.969-8.782-1.529-13.606-1.536h-0.005c-13.653-0.043-27.477 4.267-39.168 11.264-10.027 7.296-17.92 17.323-23.851 28.16-5.163 13.483 2.048 28.885 12.928 37.291 8.277 5.547 16.299 12.032 26.027 14.933 11.947 3.925 23.253 9.472 34.475 15.104 5.456 2.832 9.472 7.797 10.977 13.762l0.031 0.147c3.883 6.272 0.299 14.677 4.523 20.395 6.443 4.693 13.739-0.896 18.773-4.949 11.008-8.107 20.693-19.285 23.509-33.024z"></path>
</svg>

        </Modal>
        
        </>
    )
}