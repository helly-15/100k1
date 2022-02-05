import React from 'react';

const classnameRoot = 'main-dropdown-select';
interface IDropdownSelectProps {
inputName: string,
    inputValues:string[]
}
export const DropdownSelect: React.FC<IDropdownSelectProps> = ({
  inputName,
  inputValues,
}) => (
  <div className={`${classnameRoot}__wrapper`}>
    <label htmlFor={inputName}>
      {`Choose ${inputName}`}
      :
    </label>
    <select id={inputName}>
      {inputValues.map(((value) => <option>{ value }</option>))}
    </select>
  </div>
);
