import React from 'react';
import './CompoundInterest.css';
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

const CompoundInterest: React.FC = () => {
  const [values, setValues] = React.useState({
    amount: 0,
    rate: 0,
    years: '5',
  });

  const [result, setResult] = React.useState<string | null>(null);

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'amount',
      label: 'Principal Amount',
      placeholder: 'Enter amount',
      min: 0,
      value: values.amount,
    },
    {
      type: 'number',
      name: 'rate',
      label: 'Interest Rate (%)',
      placeholder: 'Enter rate',
      min: 0,
      max: 100,
      step: 0.1,
      value: values.rate,
    },
    {
      type: 'select',
      name: 'years',
      label: 'Time Period',
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

  const calculateCompoundInterest = () => {
    const principal = values.amount;
    const rate = values.rate / 100; // Percentage to decimal
    const years = parseInt(values.years);

    if (principal <= 0 || rate <= 0 || years <= 0) {
      setResult('Please enter valid positive numbers.');
      return;
    }

    // Compound interest formula A = P(1 + r)^t
    const amount = principal * Math.pow(1 + rate, years);
    setResult(`Final Amount: $${amount.toFixed(2)}`);
  };

  return (
    <div className="feature-calculator-container">
      <div className="calculator-content">
        <BaseCalculator
          title="Compound Interest"
          fields={fields}
          onCalculate={calculateCompoundInterest}
          onFieldChange={handleFieldChange}
          results={
            <div className="calculator-result">
              {result ? <p><strong>{result}</strong></p> : <p>Enter valid values to see the result</p>}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CompoundInterest;