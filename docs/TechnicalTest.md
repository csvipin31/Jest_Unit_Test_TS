# Interest Calculation  - Technical Test

This task outlines the test scenarios for validating the calculateInterest function. The goal is to ensure that the function handles a variety of inputs, including edge cases, boundary conditions, and potential floating-point precision issues.

## Test Scenarios

1. Calculation with Positive Values

    - `Positive Cases`: Calculate interest with typical positive principal amounts and interest rates:

        ```bash
        example : 
        1000 principal, 5% interest rate
        5000 principal, 2% interest rate
        10,000 principal, 3.5% interest rate

    - `Zero Intrest Rate` : Ensure the function correctly handles a 0% interest rate (interest should be 0).

        ```bash
        example : 
        1000 principal, 0% interest rate

    - `Zero Principal Amount` : Ensure the function correctly handles a 0 princpal amount (princpal should be 0).

        ```bash
        example : 
        0 principal, 4% interest rate

    - `Small Principal and/or Interest Rate` : Test with very small values to assess accuracy and handling of precision.

        ```bash
        example : 
        10 principal, 0.01% interest rate


2. Calculation with Negative Values:

    - `Negative Values` : Test how the function handles negative input (this might depend on our application's requirements).

        ```bash
        example : 
        Should func throw an error?
        should func return a negative interest value?


3. Calulation with Boundary Values :

    - `Large Principal and Interest Rate`: large numbers to check for potential overflow or calculation errors.

        ```bash
        example : 
        1,000,000,000 principal, 10% interest rate


    - `Upper Boundary Interest Rates` : Check for higher interest rates near or exceeding 100%, ensuring that the function handles such high rates appropriately.

        ```bash
        example : 
        1,000 principal, 99.99% interest rate


## Strategies for Precision Handling

Floating-point numbers can lead to unexpected results due to how they are stored in memory : Calculation with Floating-Point Precision :

  1. `Jest Inbuilt matchers`  : Use toBeCloseTo to compare floating point numbers for approximate equality.[`.toBeCloseTo(number, numDigits?)`](https://jestjs.io/docs/expect#tobeclosetonumber-numdigits)

        ```bash
        floating-point arithmetic can introduce small precision errors, leading to unexpected results when comparing decimal values. 
       example, adding 0.2 and 0.1 does not precisely equal 0.3 but results in 0.30000000000000004. 

       This can cause direct equality tests (toBe) to *fail*. 

       To handle this, Jest provides toBeCloseTo, which checks that the difference between the expected and actual values is within a specified precision. 
       By default, it compares up to two decimal places, but we can specify more, like in this example, where the test passes with a precision of five digits:
       
       test('adding works sanely with decimals', () => {
            expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
        });

  2. `Rounding Approaches` : Custom function: Use rounding methods to ensure calculations are accurate up to a certain number of decimal places.

        ```bash
        function round(value: number, decimals: number): number {
            return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
        }

        console.log(round(1.2345, 2)); // Output: 1.23
        console.log(round(1.2355, 2)); // Output: 1.24
        console.log(round(1.005, 2));  // Output: 1.01

  3. `Precision Libraries` :  Using libraries designed for high-precision calculations. Libraries like [`decimal.js`](https://mikemcl.github.io/decimal.js/) or [`BigNumber.js`](https://mikemcl.github.io/bignumber.js/) can help mitigate floating-point precision issues.
