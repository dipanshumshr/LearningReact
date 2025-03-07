import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { postPlaces } from './fetchPlaces.js';
import ErrorPage from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [errorText,setErrorText] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    try{
         await postPlaces([selectedPlace,...userPlaces])
         setUserPlaces((prevPickedPlaces) => {
          if (!prevPickedPlaces) {
            prevPickedPlaces = [];
          }
          if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
            return prevPickedPlaces;
          }
          return [selectedPlace, ...prevPickedPlaces];
        });
    }
    catch(error)
    {
      setUserPlaces(userPlaces)
      setErrorText({ title: "Error occured" , message: error.message || "Failed to Push changes"})
    }   
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    try{
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
      postPlaces( userPlaces.filter((place)=> place.id !== selectedPlace.current.id))
    }
    catch(error){
      setUserPlaces(userPlaces);
      setErrorText({title : "Unable to delete" , message : error.message || "unable to delete the message"})
    }
   

    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError()
  {
    setErrorText(null);
  }

  return (
    <>
      <Modal open={errorText} onClose={handleError}>
         {errorText && < ErrorPage title = {errorText.title} message = {errorText.message} onConfirm = {handleError}/>} 
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
