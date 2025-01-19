import React from 'react';
import './Yield.css'; // Rename the file according to the feature's purpose
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

interface SelectField extends BaseField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
  value: string;
}

type CalculatorField = NumberField | SelectField;

const YieldCalculator: React.FC = () => {
  const [values, setValues] = React.useState({
    principal: 0,
    rate: 0,
    years: '5',
  });

  const [result, setResult] = React.useState<number | null>(null);

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'principal',
      label: 'Principal Amount',
      placeholder: 'Enter principal amount',
      min: 0,
      value: values.principal,
    },
    {
      type: 'number',
      name: 'rate',
      label: 'Annual Return Rate (%)',
      placeholder: 'Enter rate',
      min: 0,
      max: 100,
      step: 0.1,
      value: values.rate,
    },
    {
      type: 'select',
      name: 'years',
      label: 'Time Period (Years)',
      options: [
        { value: '5', label: '5 years' },
        { value: '10', label: '10 years' },
        { value: '15', label: '15 years' },
      ],
      value: values.years,
    },
  ];

  const handleFieldChange = (name: string, value: FieldValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateYield = () => {
    const { principal, rate, years } = values;
    const time = parseInt(years);
    const annualRate = rate / 100;

    const totalYield = principal * Math.pow(1 + annualRate, time);
    setResult(totalYield);
  };

  return (
    <div className="feature-calculator-container">
      <h2 className="calculator-title">Yield Calculator</h2>
      <div className="calculator-content">
        <BaseCalculator
          title="Yield Calculator"
          fields={fields}
          onCalculate={calculateYield}
          onFieldChange={handleFieldChange}
          results={
            result !== null ? (
              <div className="results">
                <h3>Total Yield:</h3>
                <p>${result.toFixed(2)}</p>
              </div>
            ) : (
              <div className="results">
                <h3>Total Yield:</h3>
                <p>Please fill the fields and calculate.</p>
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default YieldCalculator;
