import React from 'react';
import './TimeValue.css';
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

const TimeValueCalculator: React.FC = () => {
  const [values, setValues] = React.useState({
    amount: 0,
    rate: 0,
    years: '1',
    calculationType: 'future', // Default to future value calculation
  });

  const [result, setResult] = React.useState<number | null>(null);

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'amount',
      label: 'Initial Amount',
      placeholder: 'Enter amount',
      min: 0,
      value: values.amount,
    },
    {
      type: 'number',
      name: 'rate',
      label: 'Annual Interest Rate (%)',
      placeholder: 'Enter interest rate',
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
        { value: '1', label: '1 year' },
        { value: '5', label: '5 years' },
        { value: '10', label: '10 years' },
        { value: '20', label: '20 years' },
      ],
      value: values.years,
    },
    {
      type: 'select',
      name: 'calculationType',
      label: 'Calculation Type',
      options: [
        { value: 'future', label: 'Future Value (FV)' },
        { value: 'present', label: 'Present Value (PV)' },
      ],
      value: values.calculationType,
    },
  ];

  const handleFieldChange = (name: string, value: FieldValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTimeValue = () => {
    const { amount, rate, years, calculationType } = values;
    const principal = amount;
    const annualRate = rate / 100;
    const time = parseInt(years, 10);

    if (calculationType === 'future') {
      // Calculate Future Value: FV = P * (1 + r)^t
      const futureValue = principal * Math.pow(1 + annualRate, time);
      setResult(futureValue);
    } else if (calculationType === 'present') {
      // Calculate Present Value: PV = FV / (1 + r)^t
      const presentValue = principal / Math.pow(1 + annualRate, time);
      setResult(presentValue);
    }
  };

  return (
    <div className="feature-calculator-container">
      <div className="calculator-content">
        <BaseCalculator
          title="Time Value Calculator"
          fields={fields}
          onCalculate={calculateTimeValue}
          onFieldChange={handleFieldChange}
          results={
            result !== null ? (
              <div className="results">
                <p><strong>${result.toFixed(2)}</strong></p>
              </div>
            ) : (
              <div className="results">
                <p>Please fill in the fields and click Calculate.</p>
              </div>
            )
          }
        />
      </div>
    </div>
  );
};

export default TimeValueCalculator;
