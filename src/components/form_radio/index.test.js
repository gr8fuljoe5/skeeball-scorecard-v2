import React from 'react';
import {
  shallow,
  mount,
  render
} from 'enzyme';
import Radio from './index'

jest.unmock('./index');

const checked = true
const autofocus = true // Default: false.
const disabled = false // Default: false.
const id = 'example_id' // Ensured unique, if blank.
const label = 'Individual radio label' // Accompanying text.
const name = 'example_name' // Uses id, if blank.
const required = true // Default: false.
const value = 'example_value' // Uses label, if blank.

const elem = mount(
  <Radio autofocus={autofocus}
      checked={checked}
      disabled={disabled}
      id={id}
      label={label}
      name={name}
      required={required}
      value={value} 
    />)


describe("A suite", () => {
  it("contains spec with an expectation", () => {
    const wrapper = render(<Radio/>)
      // expect(wrapper).toBe(elem);
  });

  it('rendered the title', () => {
    expect(elem.text()).toBe("Individual radio label");
  });

  it('has correct ID', function() {
    expect(elem.props().id).toBe('example_id');
  });

  it('has correct name', function() {
    expect(elem.props().name).toBe('example_name');
  });

  it('has correct value', function() {
    expect(elem.props().value).toBe('example_value');
  });

  it('has correct required', function() {
    expect(elem.props().required).toBe(true);
  });

  it('has correct checked', function() {
    expect(elem.props().checked).toBe(true);
  });

  it('has correct disabled', function() {
    expect(elem.props().disabled).toBe(false);
  });

});