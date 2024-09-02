# NurtureCloud Property Report Funnel - Cypress Automation

Automation testing of NurtureCloud's Property Report Funnel using Cypress

## Prerequisites:

- Node.js 18.x, 20.x, or 22.x (https://nodejs.org/en)
- Git (https://git-scm.com/)

## Getting Started:

1. Install dependencies:

```
npm install cypress
```

2. Start the Cypress app:

```
npx cypress open
```

## Test cases

The file PropertyReportFunnel.cy.js includes the following test cases

Entering property address
Entering property details
Confirm user details
- Questionnaire
	1. Relationship with the property
		- Owner Occupied
			1. When are you thinking of selling?
				- Now
				- Within the next month
				- 2-6 months
				- 6+ months
				- Already on the market
				- Not sure
				- Just refinancing
		2. Owner Investor
			1. When are you thinking of selling?
				- Now
				- Within the next month
				- 2-6 months
				- 6+ months
				- Already on the market
				- Not sure
				- Just refinancing
		3. Buyer
			- Are you looking to sell a property before purchase
				- Yes
				- No
		4. Tenant

