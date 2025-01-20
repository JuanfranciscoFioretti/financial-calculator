# financial-calculator
Financial calculator suite built with React. Includes tools like compound interest calculator, currency converter, percentage calculator, and more. Designed to be responsive, intuitive, and modular. This project is built using **React JS**, **TypeScript**, and **CSS**. The application provides various financial calculators, allowing users to compute results for tasks such as percentage calculations, compound interest, and loan planning. The development prioritizes reusability, user experience, and basic security principles.

The application demonstrates modern web development practices, including a clean folder structure, reusable components, and responsive design. While functional, the project acknowledges areas for improvement, especially in design, usability, and additional features. Due to the time constraints of the challenge, some decisions were made to ensure efficient delivery while leaving room for future enhancements.

---


### Features

1. **Implemented Calculators:**
   - **Compound Interest Calculator**: Calculate future values based on compound interest.
   - **Savings Calculator**: Plan and analyze savings growth over time.
   - **Currency Converter**: Convert between different currencies.
   - **Percentage Calculator**: Calculate percentages of base values.
   - **Loan Calculator**: Evaluate loan repayment schedules.
   - **Investment Planner**: Plan and forecast investment growth.
   - **Time Value Calculator**: Analyze the time value of money.
   - **Ratio Calculator**: Compute financial ratios.
   - **Yield Calculator**: Determine yield percentages for investments.

2. **Reusable Components:**
   - Modular components like buttons, input fields, and skeleton loaders are designed for reusability across the application and future projects.

3. **Responsive Design:**
   - The application adapts seamlessly to different screen sizes, providing a consistent user experience on desktop and mobile devices.

4. **CSS-based Styling:**
   - CSS was chosen for simplicity, compatibility, and ease of future migration to advanced frameworks like **Next.js**.

5. **AI-Assisted Development:**
   - AI tools guided architectural decisions, optimized the folder structure, and implemented maintainable logic for each calculator.

---

### Folder Structure

```
src/
|-- assets/
|-- components/
|   |-- common/
|   |   |-- Button/
|   |   |   |-- Button.tsx
|   |   |   |-- Button.css
|   |   |-- CalculatorSkeleton/
|   |   |   |-- CalculatorSkeleton.tsx
|   |   |-- Icons/
|   |   |-- Input/
|   |-- layout/
|   |   |-- Sidenav/
|   |       |-- Sidenav.tsx
|   |       |-- Sidenav.css
|-- features/
|   |-- compound/
|   |-- currency/
|   |-- investment/
|   |-- loan/
|   |-- percentage/
|   |-- ratio/
|   |-- savings/
|   |-- timeValue/
|   |-- yield/
|-- hooks/
|-- routes/
|-- styles/
|   |-- abstracts/
|   |   |-- _variables.css
|   |-- base/
|       |-- reset.css
|       |-- main.css
|-- types/
|-- utils/
|-- App.tsx
|-- App.css
|-- index.tsx
```

---

### Implementation Decisions

1. **Switching from SCSS to CSS:**
   - While SCSS offers advanced features, it introduced conflicts with modern tools like TypeScript and React JS during development. For a smoother and more compatible approach, CSS was chosen.
   - This decision simplifies future migration to advanced technologies like **Next.js** and reduces technical debt.

2. **AI Assistance:**
   - AI tools were leveraged to create a logical folder structure, reusable components, and efficient calculator logic. These tools ensured clarity and simplicity in implementation.

3. **Button-Triggered Calculations:**
   - Calculations require users to press the **Calculate** button after entering input values. This approach ensures clarity and prevents unexpected updates.

4. **Acknowledged Limitations:**
   - Time constraints led to prioritizing functionality over advanced design and features. Future iterations can focus on enhancements like animations, additional calculators, and more sophisticated user interactions.

---

### How to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/JuanfranciscoFioretti/financial-calculator.git
   ```

2. **Install Dependencies:**
   Navigate to the project folder and run:
   ```bash
   npm install
   ```

3. **Start the Application:**
   ```bash
   npm run dev
   ```
   Open your browser and go to `http://localhost:3000`.

---

### How to Use the Application

1. **Select a Calculator:**
   - Use the sidebar to choose the desired calculator (e.g., Percentage, Loan, Savings).

2. **Enter Values:**
   - Fill in the input fields with the required data.

3. **Perform Calculation:**
   - Click the **Calculate** button to view the results. 
   - Reset fields if needed using the reset button.

---

### Future Improvements

- **Feature Expansion:**
  - Add additional calculators or integrate predictive algorithms for financial forecasting.

- **UI Enhancements:**
  - Use design libraries like **Tailwind CSS** or **Material-UI** to improve aesthetics.

- **Advanced Technologies:**
  - Implement state management with Redux or Context API.
  - Add comprehensive testing with Jest or React Testing Library.

- **Automation and Accessibility:**
  - Automate calculations with real-time updates and improve accessibility for all users.

---

### Final Notes

This project serves as a foundation for building scalable, user-friendly applications. While it achieves its goals within the given constraints, there is significant potential for further enhancements. Future iterations can integrate more advanced tools and features, ensuring an even better user experience.

>>>>>>> 80704a7 (First commit of the App - Compound Interest Feature Implemented)
