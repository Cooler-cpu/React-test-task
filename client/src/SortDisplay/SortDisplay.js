import React, {useState} from 'react';

import {Row, Dropdown, InputGroup, Button, FormControl  } from 'react-bootstrap';

import useInput from '../hooks/useInput'

const SortDiplay = (props) => {

  const form = useInput('');


  const [isFiltContains, setIsFiltContains] = useState(false);

  const changeFiltColumn = valueColumn => {
    props.changeFiltColumn(valueColumn)
  }

  const  changefiltCategory =  valueFiltCategory => {

    props.onChangefiltCategory(valueFiltCategory);

    if(valueFiltCategory === "contains"){
      setIsFiltContains(true)
    }else{
      setIsFiltContains(false)
    }
    
    if(valueFiltCategory !== 'contains'){
      props.filtration(valueFiltCategory)
    }

  }

  const changefiltCategoryContains = valueFiltCategory => {
    props.onChangefiltCategory(valueFiltCategory);
    if(valueFiltCategory === "contains"){
      setIsFiltContains(true)
    }else{
      setIsFiltContains(false)
    }
  }

  const changeContains = (value) => {
    props.changeContains(value)
  }

  const filtrationByContains = (contains) => {
    props.returnInitialDataTable()
    changeContains(form.value)
    props.filtration(contains, form.value)

  }


   const containButtonsCloseHandler = () => {
    props.returnInitialDataTable()
    setIsFiltContains(false)
    props.onChangefiltCategory('');
   }
  
    return (
      <Row className="d-flex mt-5 bd-highlight pad-20lr">
        
        <Dropdown className="mr-5">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Фильтровать по
          </Dropdown.Toggle>
        
          <Dropdown.Menu>

            <Dropdown.Item onClick={() => changeFiltColumn('name')}>	
              Имени
            </Dropdown.Item>

            <Dropdown.Item onClick={() => changeFiltColumn('quantity')}> 
              Количеству
            </Dropdown.Item>

            <Dropdown.Item onClick={() => changeFiltColumn('distance')}>	
              Дистанции
            </Dropdown.Item>

          </Dropdown.Menu>
        
        </Dropdown>

        <Dropdown  className="mr-5 wd210">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Условие фильтрации
          </Dropdown.Toggle>

          <Dropdown.Menu>

            <Dropdown.Item 
              onClick={() => changefiltCategoryContains('contains')}
            > 
              По содержанию
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => changefiltCategory('increment')}
            >
              По возростанию
            </Dropdown.Item>

            <Dropdown.Item
              onClick={() => changefiltCategory('decrement')}
            >
              По убыванию
            </Dropdown.Item>

          </Dropdown.Menu>

        </Dropdown>

        {isFiltContains ?
         <InputGroup  className="mb-3 mt-5">
            <InputGroup.Prepend >
              <InputGroup.Text >
              Столбец {props.nameColl} содержит
              </InputGroup.Text>
            </InputGroup.Prepend >
            <FormControl  
            onChange={form.onChange} 
            //onBlur={e => form.onBlur(e)} // track the exit from the input
            value={form.value} />
        </InputGroup> 
        : null
        }

        {isFiltContains ?
          <Row className="d-flex bd-highlight row-200">
            <Button 
              onClick={() => filtrationByContains('contains')}
            >
              Фильтровать 
            </Button>


            <Button variant="outline-secondary" 
            className="button-cancel"
            onClick={containButtonsCloseHandler}
            >
              Отменить
            </Button>{' '}
          </Row>
          : null
        }

    </Row>

    )

}

export default SortDiplay
