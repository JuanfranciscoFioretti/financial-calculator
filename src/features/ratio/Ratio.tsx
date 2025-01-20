import React from 'react';
import './Ratio.css';
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

const RatioCalculator: React.FC = () => {
  const [values, setValues] = React.useState({
    number1: 0,
    number2: 0,
  });

  const [result, setResult] = React.useState<string | null>(null);

  const fields: CalculatorField[] = [
    {
      type: 'number',
      name: 'number1',
      label: 'First Number',
      placeholder: 'Enter first number',
      min: 0,
      value: values.number1,
    },
    {
      type: 'number',
      name: 'number2',
      label: 'Second Number',
      placeholder: 'Enter second number',
      min: 0,
      value: values.number2,
    },
  ];

  const handleFieldChange = (name: string, value: FieldValue) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateRatio = () => {
    const { number1, number2 } = values;

    if (number1 <= 0 || number2 <= 0) {
      setResult('Please enter valid positive numbers.');
      return;
    }

    // Find the greatest common divisor (GCD)
    const gcd = (a: number, b: number): number => {
      return b === 0 ? a : gcd(b, a % b);
    };

    const divisor = gcd(number1, number2);

    const simplifiedNumber1 = number1 / divisor;
    const simplifiedNumber2 = number2 / divisor;

    setResult(`${simplifiedNumber1} : ${simplifiedNumber2}`);
  };

  return (
    <div className="feature-calculator-container">
      <div className="calculator-content">
        <BaseCalculator
          title="Ratio Calculator"
          fields={fields}
          onCalculate={calculateRatio}
          onFieldChange={handleFieldChange}
          results={
            result !== null ? (
              <div className="results">
                <p>The simplified ratio is: <strong>{result}</strong></p>
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

export default RatioCalculator;
