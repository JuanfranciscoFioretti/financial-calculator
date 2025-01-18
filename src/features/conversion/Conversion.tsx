import React from 'react';
import './Conversion.css';
// import ExampleCalculator from '../../components/common/Calculator/Calculator';
import BaseCalculator from '../../components/common/Calculator/Calculator';



type FieldValue = string | number;

interface BaseField {
  name: string;
  label: string;
  placeholder?: string;
}

interface NumberField extends BaseField {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
  value: number;
}

interface TextField extends BaseField {
  type: 'text';
  value: string;
}

interface SelectField extends BaseField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
  value: string;
}

type CalculatorField = NumberField | TextField | SelectField;


const Conversion: React.FC = () => {

  const [values, setValues] = React.useState({
        amount: 0,
        rate: 0,
        years: '5'
      });

    const fields: CalculatorField[] = [
      {
        type: 'number',
        name: 'amount',
        label: 'Principal Amount',
        placeholder: 'Enter amount',
        min: 0,
        value: values.amount
      },
      {
        type: 'number',
        name: 'rate',
        label: 'Interest Rate (%)',
        placeholder: 'Enter rate',
        min: 0,
        max: 100,
        step: 0.1,
        value: values.rate
      },
      {
        type: 'select',
        name: 'years',
        label: 'Time Period',
        options: [
          { value: '5', label: '5 years' },
          { value: '10', label: '10 years' },
          { value: '15', label: '15 years' }
        ],
        value: values.years
      }
  ];

      const handleFieldChange = (name: string, value: FieldValue) => {
            setValues(prev => ({
              ...prev,
              [name]: value
            }));
          };
  
  return (
    <div className="feature-calculator-container">
      <h2 className="calculator-title">Conversion Calculator</h2>
      <div className="calculator-content">
        {/* Calculator content will go here */}
        <BaseCalculator 
          title="Example Calculator"
          fields={fields}
          onCalculate={() => console.log('Calculating...', values)}
          onFieldChange={handleFieldChange}
          results={<div>Result will appear here</div>}/>
      </div>
    </div>
  );
};

export default Conversion;