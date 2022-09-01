
import { useState } from 'react'
import Input from '../Input'
import Select from '../Select'
import DatePickerApp from '../DatePicker'
import PropTypes from 'prop-types'
import React from 'react'

/**
 *
 * @param {Object} props
 * @param {Array} props.states
 * @param {Array} props.departments
 * @param {Function} props.setSubmitData
 * @returns {React.ReactElement}
 */

function Form({ states, departments, setSubmitData }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [zipCode, setZipCode] = useState()
  const [selectedOptionState, setSelectedOptionState] = useState(0)
  const [selectedOptionDepartment, setSelectedOptionDepartment] = useState(0)

  const dateFormat = (/** @type {Date} */ date) =>
    `${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${
      date.getMonth() < 10 ? '0' : ''
    }${date.getMonth() + 1}/${date.getFullYear()}`

  function setInvalidClass(e) {
    if (
      e.target.value.length <= 1 &&
      e.target.className !== 'invalid'
    ) {
      e.target.classList.add('invalid')
    } else {
      e.target.classList.remove('invalid')
    }
  }

  function handleChange(e, id) {
    switch (id) {
      case 'firstName':
        setFirstName(e.target.value)
        setInvalidClass(e)
        break
      case 'lastName':
        setLastName(e.target.value)
        setInvalidClass(e)
        break
      case 'dateOfBirth':
        setDateOfBirth(e.target.value)
        break
      case 'startDate':
        setStartDate(e.target.value)
        break
      case 'street':
        setStreet(e.target.value)
        break
      case 'city':
        setCity(e.target.value)
        break
      case 'zipCode':
        setZipCode(e.target.value)
        break
      default:
        break
    }
  }

  function handleSubmit(e) {
    const regexName = new RegExp('[a-zA-Z_ -s\\p{latin}]{2,}$', 'g')
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      startDate: dateFormat(startDate),
      department: departments[selectedOptionDepartment],
      dateOfBirth: dateFormat(dateOfBirth),
      street: street,
      city: city,
      state: states[selectedOptionState],
      zipCode: zipCode,
    }

    if (
      regexName.test(firstName) === true ||
      firstName.length > 1 ||
      regexName.test(lastName) === true ||
      lastName.length > 1
    ) {
      setSubmitData(newEmployee)
    } else {
      alert('Formulaire invalide ou incomplet!')
    }
    e.preventDefault()
  }

  return (
    <form id={'create-employee'} onSubmit={(e) => handleSubmit(e)}>
      <Input
        type={'text'}
        label={'First Name'}
        id={'firstName'}
        onChange={(e) => handleChange(e, 'firstName')}
        required={true}
      />
      <Input
        type={'text'}
        label={'Last Name'}
        id={'lastName'}
        onChange={(e) => handleChange(e, 'lastName')}
        required={true}
      />

      <DatePickerApp
        label={'Date of Birth'}
        id="date-of-birth"
        startDate={dateOfBirth}
        setStartDate={setDateOfBirth}
      />

      <DatePickerApp
        label={'Start Date'}
        id="start-date"
        startDate={startDate}
        setStartDate={setStartDate}
      />

      <fieldset>
        <legend>Address</legend>
        <Input
          type={'text'}
          label={'Street'}
          id={'street'}
          onChange={(e) => handleChange(e, 'street')}
        />
        <Input
          type={'text'}
          label={'City'}
          id={'city'}
          onChange={(e) => handleChange(e, 'city')}
        />
        <Select
          label={'State'}
          options={states}
          selectedOption={selectedOptionState}
          setSelectedOption={setSelectedOptionState}
        />
        <Input
          type={'number'}
          label={'Zip code'}
          id={'zipCode'}
          onChange={(e) => handleChange(e, 'zipCode')}
          // @ts-ignore
          min={0}
          max={99999}
        />
      </fieldset>
      <div>
        <Select
          label={'Department'}
          options={departments}
          selectedOption={selectedOptionDepartment}
          setSelectedOption={setSelectedOptionDepartment}
        />
      </div>
      <div className="submitContainer">
        <button onClick={(e) => handleSubmit(e)}>Save</button>
      </div>
    </form>
  )
}

export default Form

Form.propType = {
  states: PropTypes.array.isRequired,
  departments: PropTypes.array.isRequired,
  setSubmitData: PropTypes.func.isRequired,
}
