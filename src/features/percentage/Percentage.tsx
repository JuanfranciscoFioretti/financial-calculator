import React from 'react';
import './Percentage.css';
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

type CalculatorField = NumberField;

const PercentageCalculator: React.FC = () => {
  const [values, setValues] = React.useState({
    base: 0,
    percentage: 0,
  });

  const [result, setResult] = React.useState<number | null>(null);

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'base',
      label: 'Base Number',
      placeholder: 'Enter the base number',
      min: 0,
      value: values.base,
    },
    {
      type: 'number',
      name: 'percentage',
      label: 'Percentage (%)',
      placeholder: 'Enter the percentage',
      min: 0,
      max: 100,
      step: 0.1,
      value: values.percentage,
    },
  ];

  const handleFieldChange = (name: string, value: FieldValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculatePercentage = () => {
    const { base, percentage } = values;
    const result = (base * percentage) / 100;
    setResult(result);
  };

  return (
    <div className="feature-calculator-container">
      <div className="calculator-content">
        <BaseCalculator
          title="Percentage Calculator"
          fields={fields}
          onCalculate={calculatePercentage}
          onFieldChange={handleFieldChange}
          results={
            result !== null ? (
              <div className="results">
                <p><strong>{`${values.percentage}% of ${values.base} is ${result.toFixed(2)}`}</strong></p>
              </div>
            ) : (
              <div className="results">
                <p>Enter valid values to see the result</p>
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default PercentageCalculator;
