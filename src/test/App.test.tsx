import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Map from '../components/map/Map'
import Table from '../components/table/Table'

import AddModal from '../components/modal/AddModal'

import ID from './id'

import MOCK from './mock-data'

describe('Table', () => {
  const props = {
    cityList: MOCK.cityList,
    openEditModal: () => { }
  }

  it('can be instantiated', () => {
    render(<Table {...props} />);
    const linkElement = screen.getByTestId(ID.TABLE);
    expect(linkElement).toBeInTheDocument();
  });

  it('has all the elements in the payload', () => {
    render(<Table {...props} />);
    const linkElement = screen.getAllByTestId(ID.TABLE_ROW);
    expect(linkElement.length).toEqual(3)
  })
})

describe('Map', () => {
  const props = {
    cityList: MOCK.cityList,
    openEditModal: () => { }
  }

  it('can show the initial mocked pins', () => {
    render(<Map {...props} />)
    const linkElement = screen.getAllByTestId(ID.MAP_MARKER)
    expect(linkElement.length).toEqual(3)
  })
})

describe('Modal', () => {
  const props = {
    addModalOpen: true,
    closeAddModal: () => { },
    refreshData: () => { }
  }

  it('has all the input fields present', () => {
    render(<AddModal {...props} />)
    let field;

    field = screen.getByTestId(ID.FORM_TITLE)
    expect(field).toBeInTheDocument();

    field = screen.getByTestId(ID.FORM_LAT)
    expect(field).toBeInTheDocument();

    field = screen.getByTestId(ID.FORM_LONG)
    expect(field).toBeInTheDocument();

    field = screen.getByTestId(ID.FORM_CONTENT)
    expect(field).toBeInTheDocument();

    field = screen.getByTestId(ID.FORM_IMAGE_URL)
    expect(field).toBeInTheDocument();
  })
})
