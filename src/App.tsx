import { useEffect, useState } from 'react';

import Layout from './layout/Layout'
import EditModal from './components/modal/EditModal'
import AddModal from './components/modal/AddModal'

import { API, CityData } from './utils/utils'

import './App.css';

function App() {
  const [cityList, setCityList] = useState<Array<CityData>>([])

  const [focusedCity, setFocusedCity] = useState<CityData | null>(null)
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false)

  const [renderCounter, setRenderCounter] = useState<number>(0)

  const refreshData = () => {
    setRenderCounter(prev => prev + 1)
  }

  const openEditModal = (cityData: CityData) => { setFocusedCity(cityData) }
  const closeEditModal = () => { setFocusedCity(null) }

  const openAddModal = () => { setAddModalOpen(true) }
  const closeAddModal = () => { setAddModalOpen(false) }


  useEffect(() => {
    API.GET_LIST()
      .then((response) => response.json())
      .then(data => { setCityList(data) })
  }, [renderCounter])

  const layoutProps = { cityList, openEditModal, openAddModal }
  const editModalProps = { focusedCity, closeEditModal, refreshData }
  const AddModalProps = { addModalOpen, closeAddModal, refreshData }

  return (
    <div className="App">
      <Layout {...layoutProps} />
      <EditModal {...editModalProps} />
      <AddModal {...AddModalProps} />
    </div>
  );
}

export default App;
