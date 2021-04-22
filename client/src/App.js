import React,  {  useState,  useEffect }  from 'react';
import axios from 'axios';

// import {BrowserRouter as Router} from 'react-router-dom'
// import { Route } from 'react-router-dom'

import Loader from './Loader/Loader'
import Table from './Table/Table'
import SortDiplay from './SortDisplay/SortDisplay';
import SettingsDisplay from './SettingsDisplay/SettingsDisplay';

import UseCategoryFiltering from './hooks/useCategoryFiltering'

function App() {

  const [filtСolumn, setFiltColumn] = useState('name');

  const onChangefiltСolumn = value => {
    setFiltColumn(value);

  };


  const [filtCategory, setFiltCategory] = useState('');

  const changefiltCategory = value => {

    setFiltCategory(value);

  };


  const [contains, setСontains] = useState('');
  
  const onChangeContains = value => {
     setСontains(value)
  };

  const returnInitialDataTable = () => {
    setData(dataConst)
  }

  const filtration = (filtCategory, contains) => {

      let dataFiltered;

      if(filtСolumn === 'name'){
        // data - current data Table, the category by which we sort
        dataFiltered = UseCategoryFiltering(dataConst, filtCategory, 'name', contains)
      }

      if(filtСolumn === 'quantity'){
        dataFiltered = UseCategoryFiltering(dataConst, filtCategory, 'quantity', contains)
      }

      if(filtСolumn === 'distance'){
        dataFiltered = UseCategoryFiltering(dataConst, filtCategory, 'distance', contains)
      }

      setData(dataFiltered)
  }


  const [isLoading, setLoading] = useState(true) 

  const [data, setData] = useState([])
  const [dataConst, setDataConst] = useState([]) //data about which does not change


  useEffect(()  => {

    axios.get('http://localhost:5000/api/dataTable/get')
    .then(res => {
      const dataTable = res.data;

      setData( dataTable );
      setDataConst(dataTable);

      setLoading(false)
    })

  }, []);


  return (
    <div className="container">

      
      { isLoading ?
       
        <Loader/> 

        :

          <Table dataTable={data}/>
     
      }

      <SortDiplay 
       changeFiltColumn={onChangefiltСolumn}
       onChangefiltCategory={changefiltCategory}
       changeContains={onChangeContains}  
       filtration={filtration} //column filtering function
       returnInitialDataTable={returnInitialDataTable}
       //return the initial state of the table after applying filtering by content
      

       filtCategory={filtCategory}  //passing variables to check
       filtContains={contains}

       nameColl={filtСolumn} 
      /> 

      <SettingsDisplay
        nameColl={filtСolumn} 
        filtCategory={filtCategory}  
        filtContains={contains}
      />

    </div>
  );
}

export default App;
